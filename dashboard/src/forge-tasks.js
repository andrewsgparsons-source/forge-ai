// Forge AI Tasks — Firebase-powered task management
// Stored at: business/forge/tasks in Firebase
// Single user: Andrew (auto-set, no prompt)

(function(window) {
  'use strict';

  const FORGE_PATH = 'business/forge/tasks';
  const BIZ_EMOJI = '☕';
  let tasksContainer = null;
  let currentTasks = {};
  let showDone = false;

  // ─── Auto-set user to Andrew ───
  function ensureUser() {
    if (window.FireSync) {
      FireSync.setUser('Andrew');
    }
  }

  // ─── Build and inject the tasks panel into the sidebar ───
  function injectTasksPanel() {
    const sidebar = document.getElementById('sidebar');
    if (!sidebar) return;

    // Find the nav steps container — we insert tasks between dashboard strip and nav steps
    const navSteps = document.getElementById('navSteps');
    if (!navSteps) return;

    tasksContainer = document.createElement('div');
    tasksContainer.id = 'forgeTasks';
    tasksContainer.className = 'forge-tasks-panel';
    tasksContainer.innerHTML = `
      <div class="forge-tasks-header">
        <span class="forge-tasks-title">${BIZ_EMOJI} Active Tasks</span>
        <button class="forge-tasks-add-btn" id="forgeAddBtn" title="Add task">+</button>
      </div>
      <div class="forge-tasks-list" id="forgeTasksList">
        <div class="forge-tasks-empty">Loading...</div>
      </div>
      <div class="forge-tasks-add-form" id="forgeAddForm" style="display:none;">
        <input type="text" class="forge-task-input" id="forgeNewTitle" placeholder="New task..." />
        <div class="forge-add-row">
          <select class="forge-task-select" id="forgeNewPriority">
            <option value="high">🔴 High</option>
            <option value="medium" selected>🟠 Medium</option>
            <option value="low">🟢 Low</option>
          </select>
          <button class="forge-task-save-btn" id="forgeSaveBtn">Add</button>
        </div>
      </div>
      <div class="forge-tasks-footer">
        <button class="forge-toggle-done" id="forgeToggleDone">Show completed</button>
      </div>
    `;

    // Insert before nav steps
    sidebar.insertBefore(tasksContainer, navSteps);

    // Bind events
    document.getElementById('forgeAddBtn').addEventListener('click', toggleAddForm);
    document.getElementById('forgeSaveBtn').addEventListener('click', saveNewTask);
    document.getElementById('forgeNewTitle').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') saveNewTask();
      if (e.key === 'Escape') toggleAddForm();
    });
    document.getElementById('forgeToggleDone').addEventListener('click', toggleShowDone);
  }

  function toggleAddForm() {
    const form = document.getElementById('forgeAddForm');
    const isHidden = form.style.display === 'none';
    form.style.display = isHidden ? 'block' : 'none';
    if (isHidden) {
      document.getElementById('forgeNewTitle').value = '';
      document.getElementById('forgeNewTitle').focus();
    }
  }

  function saveNewTask() {
    const titleInput = document.getElementById('forgeNewTitle');
    const prioritySelect = document.getElementById('forgeNewPriority');
    const title = titleInput.value.trim();
    if (!title) return;

    const task = {
      title: title,
      detail: '',
      biz: BIZ_EMOJI,
      priority: prioritySelect.value,
      status: 'active',
      createdBy: 'Andrew',
      createdAt: new Date().toISOString()
    };

    FireSync.addTask(FORGE_PATH, task);

    // Also add to shared attention feed so it shows up cross-dashboard
    FireSync.addTask('attention', {
      title: title,
      detail: '',
      biz: BIZ_EMOJI,
      priority: prioritySelect.value,
      status: 'active',
      createdBy: 'Andrew',
      createdAt: new Date().toISOString()
    });

    titleInput.value = '';
    document.getElementById('forgeAddForm').style.display = 'none';
  }

  function toggleShowDone() {
    showDone = !showDone;
    const btn = document.getElementById('forgeToggleDone');
    btn.textContent = showDone ? 'Hide completed' : 'Show completed';
    renderTasks(currentTasks);
  }

  // ─── Render task list ───
  function renderTasks(tasksObj) {
    currentTasks = tasksObj;
    const list = document.getElementById('forgeTasksList');
    if (!list) return;

    const tasks = Object.entries(tasksObj)
      .map(function(entry) { return Object.assign({ _id: entry[0] }, entry[1]); })
      .filter(function(t) {
        if (showDone) return true;
        return t.status === 'active' || t.status === 'backlog';
      })
      .sort(function(a, b) {
        // Priority sort: high first, then medium, then low
        var prioOrder = { high: 0, medium: 1, low: 2 };
        var pa = prioOrder[a.priority] !== undefined ? prioOrder[a.priority] : 1;
        var pb = prioOrder[b.priority] !== undefined ? prioOrder[b.priority] : 1;
        if (pa !== pb) return pa - pb;
        // Then by date (newest first)
        return (b.createdAt || '').localeCompare(a.createdAt || '');
      });

    if (tasks.length === 0) {
      list.innerHTML = '<div class="forge-tasks-empty">' +
        (showDone ? 'No tasks yet' : 'No active tasks — nice! ✨') +
        '</div>';
      return;
    }

    var html = '';
    tasks.forEach(function(t) {
      var isDone = t.status === 'done' || t.status === 'dismissed';
      var prioCls = 'prio-' + (t.priority || 'medium');
      var doneCls = isDone ? ' forge-task-done' : '';
      html += '<div class="forge-task-item ' + prioCls + doneCls + '" data-id="' + t._id + '">';
      html += '<button class="forge-task-check" data-id="' + t._id + '" title="' + (isDone ? 'Reopen' : 'Mark done') + '">';
      html += isDone ? '✓' : '';
      html += '</button>';
      html += '<span class="forge-task-text" data-id="' + t._id + '">' + escHtml(t.title || '') + '</span>';
      html += '</div>';
    });
    list.innerHTML = html;

    // Bind click events
    list.querySelectorAll('.forge-task-check').forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        var id = btn.getAttribute('data-id');
        var task = currentTasks[id];
        if (!task) return;
        if (task.status === 'done' || task.status === 'dismissed') {
          FireSync.updateTask(FORGE_PATH, id, { status: 'active', completedAt: null });
        } else {
          FireSync.moveTask(FORGE_PATH, id, 'done');
        }
      });
    });

    list.querySelectorAll('.forge-task-text').forEach(function(span) {
      span.addEventListener('click', function() {
        var id = span.getAttribute('data-id');
        var task = currentTasks[id];
        if (task && window.ItemDetail) {
          // Open detail panel — pass the forge path for edits
          openForgeDetail(id, task);
        }
      });
    });
  }

  // ─── Open item detail with Forge-specific path handling ───
  function openForgeDetail(taskId, task) {
    // ItemDetail expects attention path items by default.
    // We open it with the task, and override the done/dismiss to use our forge path.
    ItemDetail.open(taskId, task);

    // Override the done/dismiss to work on forge path
    var doneBtn = document.getElementById('idpDoneBtn');
    var dismissBtn = document.getElementById('idpDismissBtn');

    if (doneBtn) {
      // Replace onclick
      doneBtn.onclick = function() {
        FireSync.moveTask(FORGE_PATH, taskId, 'done');
        ItemDetail.close();
      };
    }
    if (dismissBtn) {
      dismissBtn.onclick = function() {
        FireSync.moveTask(FORGE_PATH, taskId, 'dismissed');
        ItemDetail.close();
      };
    }
  }

  // ─── Utility ───
  function escHtml(str) {
    var div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  // ─── Initialize ───
  function init() {
    ensureUser();
    injectTasksPanel();

    // Listen for real-time task updates
    if (window.FireSync) {
      FireSync.onReady(function() {
        FireSync.onTasks(FORGE_PATH, renderTasks);
      });
    } else {
      console.warn('[ForgeTasks] FireSync not available');
    }
  }

  // Wait for DOM + FireSync
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      // Small delay to let FireSync init first
      setTimeout(init, 100);
    });
  } else {
    setTimeout(init, 100);
  }

  // ─── Export (for debugging) ───
  window.ForgeTasks = {
    init: init,
    FORGE_PATH: FORGE_PATH
  };

})(window);
