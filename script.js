// ═══════════════════════════════════════════
//  DATA
// ═══════════════════════════════════════════
const USERS = [
    { id: 'admin', pass: 'Purple Cow2024', name: 'System Administrator', role: 'admin', ico: '👑' },
    { id: 'jdlamini', pass: 'water@2024', name: 'J. Dlamini', role: 'manager', ico: '📊' },
    { id: 'nkhumalo', pass: 'field#2024', name: 'N. Khumalo', role: 'field', ico: '🔧' },
    { id: 'tntuli', pass: 'view2024', name: 'T. Ntuli', role: 'viewer', ico: '👁️' },
    { id: 'admin@Purple Cow.gov.za', pass: 'Purple Cow2024', name: 'System Administrator', role: 'admin', ico: '👑' },
    { id: 'manager@Purple Cow.gov.za', pass: 'water@2024', name: 'Manager Account', role: 'manager', ico: '📊' },
    { id: 'technician@Purple Cow.gov.za', pass: 'field#2024', name: 'Field Technician', role: 'field', ico: '🔧' },
    { id: 'viewer@Purple Cow.gov.za', pass: 'view2024', name: 'Read-Only Viewer', role: 'viewer', ico: '👁️' },
];

const MUNI_DATA = {
    ward1: { name: 'Ward 1', ico: '🏘️', supply: 96, resolved: 94, dur: 8, comp: 22, sat: 88, score: 84, pres: '60 psi', pCol: 'var(--green)', openInc: 3, inProg: 2, avgR: '3.5h', c: [38, 32, 30], stat: 'Stable', sc: 'bdg-g' },
    ward2: { name: 'Ward 2', ico: '🏘️', supply: 94, resolved: 93, dur: 9, comp: 18, sat: 86, score: 82, pres: '58 psi', pCol: 'var(--green)', openInc: 4, inProg: 2, avgR: '4.0h', c: [40, 33, 27], stat: 'Stable', sc: 'bdg-g' },
    ward3: { name: 'Ward 3', ico: '🏘️', supply: 91, resolved: 90, dur: 11, comp: 35, sat: 82, score: 79, pres: '52 psi', pCol: 'var(--green)', openInc: 6, inProg: 3, avgR: '4.8h', c: [42, 35, 23], stat: 'Moderate', sc: 'bdg-a' },
    ward4: { name: 'Ward 4', ico: '🏘️', supply: 98, resolved: 96, dur: 7, comp: 14, sat: 91, score: 88, pres: '63 psi', pCol: 'var(--green)', openInc: 2, inProg: 1, avgR: '3.2h', c: [35, 38, 27], stat: 'Stable', sc: 'bdg-g' },
    ward5: { name: 'Ward 5', ico: '🏘️', supply: 89, resolved: 88, dur: 13, comp: 48, sat: 78, score: 74, pres: '46 psi', pCol: 'var(--amber)', openInc: 9, inProg: 5, avgR: '5.8h', c: [46, 33, 21], stat: 'Moderate', sc: 'bdg-a' },
    ward6: { name: 'Ward 6', ico: '🏘️', supply: 95, resolved: 95, dur: 8, comp: 21, sat: 89, score: 86, pres: '61 psi', pCol: 'var(--green)', openInc: 3, inProg: 2, avgR: '3.6h', c: [37, 35, 28], stat: 'Stable', sc: 'bdg-g' },
    ward7: { name: 'Ward 7', ico: '🏘️', supply: 87, resolved: 85, dur: 15, comp: 62, sat: 73, score: 70, pres: '43 psi', pCol: 'var(--amber)', openInc: 12, inProg: 6, avgR: '6.5h', c: [50, 33, 17], stat: 'Intermittent', sc: 'bdg-r' },
    ward8: { name: 'Ward 8', ico: '🏘️', supply: 93, resolved: 92, dur: 10, comp: 29, sat: 84, score: 81, pres: '56 psi', pCol: 'var(--green)', openInc: 5, inProg: 3, avgR: '4.2h', c: [41, 34, 25], stat: 'Stable', sc: 'bdg-g' },
    ward9: { name: 'Ward 9', ico: '🏘️', supply: 96, resolved: 95, dur: 8, comp: 17, sat: 90, score: 87, pres: '62 psi', pCol: 'var(--green)', openInc: 3, inProg: 1, avgR: '3.4h', c: [36, 36, 28], stat: 'Stable', sc: 'bdg-g' },
    ward10: { name: 'Ward 10', ico: '🏘️', supply: 90, resolved: 89, dur: 12, comp: 41, sat: 80, score: 76, pres: '49 psi', pCol: 'var(--amber)', openInc: 8, inProg: 4, avgR: '5.2h', c: [44, 34, 22], stat: 'Moderate', sc: 'bdg-a' },
    ward11: { name: 'Ward 11', ico: '🏘️', supply: 97, resolved: 96, dur: 7, comp: 12, sat: 92, score: 89, pres: '64 psi', pCol: 'var(--green)', openInc: 2, inProg: 1, avgR: '3.1h', c: [34, 38, 28], stat: 'Stable', sc: 'bdg-g' },
    ward12: { name: 'Ward 12', ico: '🏘️', supply: 85, resolved: 83, dur: 16, comp: 71, sat: 71, score: 68, pres: '41 psi', pCol: 'var(--amber)', openInc: 14, inProg: 7, avgR: '7.1h', c: [52, 32, 16], stat: 'Intermittent', sc: 'bdg-r' },
    ward13: { name: 'Ward 13', ico: '🏘️', supply: 94, resolved: 93, dur: 9, comp: 25, sat: 85, score: 83, pres: '57 psi', pCol: 'var(--green)', openInc: 4, inProg: 2, avgR: '4.1h', c: [39, 34, 27], stat: 'Stable', sc: 'bdg-g' },
    ward14: { name: 'Ward 14', ico: '🏘️', supply: 92, resolved: 91, dur: 10, comp: 33, sat: 83, score: 80, pres: '54 psi', pCol: 'var(--green)', openInc: 5, inProg: 3, avgR: '4.5h', c: [42, 34, 24], stat: 'Moderate', sc: 'bdg-a' },
};

let ALERTS = [
    { t: 'critical', ico: '🚨', h: 'Major pipe burst – Purple Cow Ward 12', p: 'Reported 08:32 · ~320 households affected', time: '08:32' },
    { t: 'warning', ico: '⚠️', h: 'Low pressure – Ward 7 Zone B', p: 'Dropped to 41 psi · Threshold is 45 psi', time: '09:14' },
    { t: 'info', ico: '🔧', h: 'Pump Station 6 maintenance started', p: 'Planned downtime · Expected restore 14:00', time: '09:45' },
    { t: 'resolved', ico: '✅', h: 'Water quality resolved – Ward 9', p: 'Lab confirmed safe · Residents notified', time: '10:12' },
    { t: 'critical', ico: '🔴', h: 'No water – Purple Cow Ward 5', p: 'Cause under investigation · Teams dispatched', time: '10:45' },
    { t: 'warning', ico: '⚠️', h: 'Reservoir dropping – Ward', p: 'Currently at 63% · Monitor closely', time: '11:02' },
    { t: 'info', ico: '📞', h: 'Complaint spike – Ward 4 Area', p: '12 new calls logged in past hour', time: '11:30' },
    { t: 'resolved', ico: '✅', h: 'Emergency repair complete – Ward 6', p: 'Service restored to 850 residents', time: '11:48' },
];

const WATER_INC = [
    ['WI-001', 'Purple Cow Ward 12', 'Major Pipe Burst', '08:32', 'Team Alpha', '🔴 Critical', 'In Progress'],
    ['WI-002', 'Purple Cow Ward 7', 'Pump Failure', '09:14', 'Team Beta', '🟡 High', 'Dispatched'],
    ['WI-003', 'Purple Cow Ward 9', 'Minor Leak', '10:05', 'Team Gamma', '🟢 Low', 'Pending'],
    ['WI-004', 'Purple Cow Ward 5', 'No Supply', '10:45', 'Team Delta', '🔴 Critical', 'In Progress'],
    ['WI-005', 'Purple Cow Ward 4', 'Quality Issue', '11:10', 'Lab Team', '🟡 Medium', 'Investigating'],
];

let ALL_INC = [
    ['INC-001', 'Water – Burst Pipe', 'Ward 12', '08:32', 'Critical', 'Team Alpha', '2h', 'Open'],
    ['INC-002', 'Water – No Supply', 'Ward 5', '10:45', 'Critical', 'Team Delta', '1.5h', 'In Progress'],
    ['INC-003', 'Pump Failure', 'Ward 7', '09:14', 'High', 'Team Beta', '3h', 'In Progress'],
    ['INC-004', 'Roads – Pothole', 'Ward 3', '07:00', 'Medium', 'Roads Unit', '24h', 'Open'],
    ['INC-005', 'Electricity Outage', 'Ward 9', '09:50', 'High', 'Eskom Ref', '6h', 'Escalated'],
    ['INC-006', 'Waste Collection', 'Ward 14', '06:30', 'Low', 'Waste Mgmt', '8h', 'Pending'],
    ['INC-007', 'Water Quality', 'Ward 4', '11:10', 'Medium', 'Lab Team', '4h', 'Investigating'],
    ['INC-008', 'Burst Pipe', 'Ward 8', '11:55', 'High', 'Team Gamma', '3h', 'Dispatched'],
];

const DS_SOURCES = [
    { ico: '💧', name: 'Smart Water Monitors', zone: 'Zones 1–5 (Wards)', status: 'connected' },
    { ico: '📞', name: 'Complaints Hotline', zone: 'All Areas', status: 'connected' },
    { ico: '🚗', name: 'Field Response Units', zone: 'Mobile', status: 'connected' },
    { ico: '📊', name: 'Community Reports Portal', zone: 'Manual Entry', status: 'pending' },
    { ico: '📈', name: 'Management Reports Hub', zone: 'Reports', status: 'pending' },
    { ico: '📱', name: 'Community Alert Network', zone: 'Notifications', status: 'connected' },
    { ico: '🔧', name: 'Pressure Monitoring Units', zone: 'Zones 3–4', status: 'connected' },
    { ico: '🏛️', name: 'Finance Integration Hub', zone: 'Finance', status: 'disconnected' },
];

const QUICK_PROMPTS = [
    'What are the most critical incidents right now?',
    'Which municipality needs urgent attention?',
    'Predict failure risk in next 24 hours',
    'How do I connect my reports feed?',
    'Summarise today\'s water supply status',
    'What is causing Ward 7 outages?',
    'Recommend resource deployment for today',
    'How do I set up Google Sheets integration?',
];

// ═══════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════
let currentUser = null;
let currentMuni = null;
let loginAttempts = 0;
let lockoutUntil = 0;
let selectedRole = 'admin';
let chatHistory = [];
let rtRunning = true;
let savedPBI = [];

// ═══════════════════════════════════════════
//  SCREEN MANAGER — the one function that controls all navigation
// ═══════════════════════════════════════════
function showScreen(name) {
    // ── Hide ALL screens (belt-and-braces: both class and style) ──
    const sLogin = document.getElementById('s-login');
    const sSelect = document.getElementById('s-select');
    const sDistrict = document.getElementById('s-district');
    const sDash = document.getElementById('s-dash');
    const fb = document.getElementById('float-back');

    sLogin.classList.add('hidden');
    sSelect.classList.add('hidden');
    sSelect.style.display = 'none';
    sDistrict.style.display = 'none';
    sDash.style.display = 'none';

    if (name === 'login') {
        sLogin.classList.remove('hidden');
        sLogin.style.display = '';
        fb.classList.remove('show');

    } else if (name === 'select') {
        sSelect.classList.remove('hidden');
        sSelect.style.display = '';          // let .screen CSS take over (flex)
        if (currentUser) {
            document.getElementById('sel-u-ico').textContent = currentUser.ico;
            document.getElementById('sel-u-name').textContent = currentUser.name;
        }
        document.getElementById('float-back-label').textContent = 'Municipality Overview';
        fb.classList.add('show');

    } else if (name === 'district') {
        sDistrict.style.display = 'flex';
        sDistrict.style.flexDirection = 'column';
        if (currentUser) {
            document.getElementById('dist-u-ico').textContent = currentUser.ico;
            document.getElementById('dist-u-name').textContent = currentUser.name;
        }
        document.getElementById('float-back-label').textContent = 'Municipality Overview';
        fb.classList.add('show');
        renderDistrictLanding();

    } else if (name === 'dash') {
        sDash.style.display = 'flex';
        sDash.style.flexDirection = 'column';
        document.getElementById('float-back-label').textContent = 'Wards';
        fb.classList.add('show');
    }
}

// ═══════════════════════════════════════════
//  CLOCK
// ═══════════════════════════════════════════
function tick() {
    const el = document.getElementById('tb-clock');
    if (el) el.textContent = new Date().toLocaleString('en-ZA', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(tick, 1000);
tick();

// ═══════════════════════════════════════════
//  LOADING OVERLAY
// ═══════════════════════════════════════════
function showLoading(msg) {
    document.getElementById('load-txt').textContent = msg || 'Loading…';
    document.getElementById('load-ov').classList.add('on');
}
function hideLoading() {
    document.getElementById('load-ov').classList.remove('on');
}

// ═══════════════════════════════════════════
//  LOGIN
// ═══════════════════════════════════════════
function pickRole(el, role) {
    document.querySelectorAll('.rc').forEach(c => c.classList.remove('sel'));
    el.classList.add('sel');
    selectedRole = role;
}

function togglePW() {
    const inp = document.getElementById('l-pass');
    const eye = document.getElementById('l-eye');
    inp.type = inp.type === 'password' ? 'text' : 'password';
    eye.textContent = inp.type === 'password' ? '👁' : '🙈';
}

function showErr(msg) {
    const err = document.getElementById('l-err');
    document.getElementById('l-err-msg').textContent = msg;
    err.classList.add('on');
    document.getElementById('l-user').classList.add('err');
    document.getElementById('l-pass').classList.add('err');
    const card = document.getElementById('login-card');
    card.style.animation = 'none';
    setTimeout(() => { card.style.animation = 'shake .4s ease'; }, 10);
}

function clearErr() {
    document.getElementById('l-err').classList.remove('on');
    document.getElementById('l-user').classList.remove('err');
    document.getElementById('l-pass').classList.remove('err');
}

function doLogin() {
    const now = Date.now();
    if (lockoutUntil > now) {
        const s = Math.ceil((lockoutUntil - now) / 1000);
        showErr('Too many failed attempts. Try again in ' + s + ' seconds.');
        return;
    }
    const username = document.getElementById('l-user').value.trim().toLowerCase();
    const password = document.getElementById('l-pass').value;
    clearErr();

    if (!username || !password) {
        showErr('Please enter your staff ID and password.');
        return;
    }

    const btn = document.getElementById('l-btn');
    btn.textContent = '⏳ Verifying…';
    btn.disabled = true;

    setTimeout(() => {
        const user = USERS.find(u => u.id.toLowerCase() === username && u.pass === password);

        if (user) {
            loginAttempts = 0;
            currentUser = user;
            btn.textContent = '✅ Access Granted!';
            btn.style.background = 'linear-gradient(135deg,var(--green),#16a34a)';

            // Navigate to district landing after login
            setTimeout(() => {
                document.getElementById('tb-u-ico').textContent = user.ico;
                document.getElementById('tb-u-name').textContent = user.name;
                showScreen('district');
                setTimeout(() => {
                    btn.textContent = '→ Sign In to Dashboard';
                    btn.disabled = false;
                    btn.style.background = '';
                }, 500);
            }, 800);

        } else {
            loginAttempts++;
            btn.textContent = '→ Sign In to Dashboard';
            btn.disabled = false;
            btn.style.background = '';
            document.getElementById('l-pass').value = '';

            if (loginAttempts >= 5) {
                lockoutUntil = Date.now() + 60000;
                showErr('Account locked after 5 failed attempts. Try again in 60 seconds.');
                loginAttempts = 0;
            } else {
                const left = 5 - loginAttempts;
                showErr('Incorrect username or password. ' + left + ' attempt' + (left !== 1 ? 's' : '') + ' remaining.');
            }
        }
    }, 900);
}

function askLogout() {
    document.getElementById('confirm-dialog').classList.add('on');
}

function confirmLogout() {
    document.getElementById('confirm-dialog').classList.remove('on');
    doLogout();
}

function handleFloatBack() {
    const distVisible = document.getElementById('s-district').style.display !== 'none';
    const selectHidden = document.getElementById('s-select').classList.contains('hidden');
    const dashVisible = document.getElementById('s-dash').style.display !== 'none';

    if (dashVisible) {
        backToSelect();
    } else if (!selectHidden) {
        showScreen('district');
    } else if (distVisible) {
        showScreen('login');
    }
}

function doLogout() {
    currentUser = null;
    currentMuni = null;
    chatHistory = [];
    document.getElementById('l-user').value = '';
    document.getElementById('l-pass').value = '';
    clearErr();
    document.getElementById('l-btn').textContent = '→ Sign In to Dashboard';
    document.getElementById('l-btn').disabled = false;
    document.getElementById('l-btn').style.background = '';
    document.getElementById('s-district').style.display = 'none';
    showScreen('login');
}

// ═══════════════════════════════════════════
//  MUNICIPALITY SELECTION
// ═══════════════════════════════════════════
function openMuni(key) {
    currentMuni = key;
    const d = MUNI_DATA[key];
    if (!d) {
        console.error('Ward not found in MUNI_DATA:', key);
        alert('Error: Ward data not found for key: ' + key);
        return;
    }
    showLoading('Loading ' + d.name + '…');

    setTimeout(() => {
        try {
            applyMuniData(d);
            // Update banner
            const mIco = document.getElementById('mb-ico');
            const mName = document.getElementById('mb-name');
            if (mIco) mIco.textContent = d.ico;
            if (mName) mName.textContent = d.name;
            // Update breadcrumb
            const bc = document.getElementById('bc-muni-name');
            if (bc) bc.textContent = d.ico + ' ' + d.name;
            // Reset to overview tab
            showDashTab('overview');
        } catch (e) {
            console.error('applyMuniData error:', e);
        }
        hideLoading();
        showScreen('dash');
        setTimeout(() => {
            try { animGauges(d.sat, d.score); } catch (e) { }
        }, 300);
    }, 800);
}

function backToSelect() {
    showScreen('select');
}

function openFromDistrict(key) {
    // Go directly to ward dashboard — no need to show select screen first
    openMuni(key);
}

// ═══════════════════════════════════════════
//  APPLY MUNICIPALITY DATA
// ═══════════════════════════════════════════
function applyMuniData(d) {
    document.getElementById('kpi-w').innerHTML = d.supply + '<span style="font-size:16px"> %</span>';
    document.getElementById('kpi-r').innerHTML = d.resolved + '<span style="font-size:16px">%</span>';
    document.getElementById('kpi-d').innerHTML = d.dur + '<span style="font-size:16px"> hrs</span>';
    document.getElementById('kpi-c').textContent = d.comp;
    document.getElementById('kpi-pres').innerHTML = d.pres;
    document.getElementById('kpi-pres').style.color = d.pCol;
    document.getElementById('gv-sat').textContent = d.sat + '%';
    document.getElementById('gv-perf').textContent = d.score;
    document.getElementById('i-open').textContent = d.openInc;
    document.getElementById('i-prog').textContent = d.inProg;
    document.getElementById('i-avg').textContent = d.avgR;
    document.getElementById('inc-pill').textContent = d.openInc;

    // Complaint bars
    document.getElementById('cb1').style.width = d.c[0] + '%'; document.getElementById('cp1').textContent = d.c[0] + '%';
    document.getElementById('cb2').style.width = d.c[1] + '%'; document.getElementById('cp2').textContent = d.c[1] + '%';
    document.getElementById('cb3').style.width = d.c[2] + '%'; document.getElementById('cp3').textContent = d.c[2] + '%';

    // Add fresh alert
    ALERTS.unshift({ t: d.openInc > 8 ? 'critical' : 'info', ico: d.ico, h: 'Dashboard loaded: ' + d.name, p: 'Supply ' + d.supply + '% · Open incidents: ' + d.openInc + ' · Avg outage: ' + d.dur + 'h', time: new Date().toTimeString().slice(0, 5) });
    renderAlerts();

    // Rebuild tables
    renderWaterTbl();
    renderAllInc();
    renderOvMunis();
    renderMuniDetail();
    renderDS();
    renderQP();
}

// ═══════════════════════════════════════════
//  TAB SWITCHING
// ═══════════════════════════════════════════
function showTab(name, btn) {
    document.querySelectorAll('.dtab').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('.dn-btn').forEach(b => b.classList.remove('on'));
    document.getElementById('tab-' + name).classList.add('on');
    if (btn) btn.classList.add('on');
    // Update breadcrumb
    const tabNames = { overview: 'Overview', water: 'Water Services', incidents: 'Incidents', municipalities: 'Municipalities', powerbi: 'Reports', ai: 'Analytical Insights', realtime: 'Live Data' };
    const bc = document.getElementById('bc-tab-name');
    if (bc) bc.textContent = tabNames[name] || name;
    if (name === 'overview') {
        setTimeout(() => {
            if (currentMuni) animGauges(MUNI_DATA[currentMuni].sat, MUNI_DATA[currentMuni].score);
        }, 200);
    }
}

function showDashTab(name) {
    document.querySelectorAll('.dtab').forEach(t => t.classList.remove('on'));
    document.querySelectorAll('.dn-btn').forEach(b => b.classList.remove('on'));
    document.getElementById('tab-' + name).classList.add('on');
    const btns = document.querySelectorAll('.dn-btn');
    btns.forEach(b => { if (b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + name + "'")) b.classList.add('on'); });
    // Fallback: just activate the first button
    if (!document.querySelector('.dn-btn.on')) btns[0].classList.add('on');
}

// ═══════════════════════════════════════════
//  GAUGES
// ═══════════════════════════════════════════
function animGauges(sat, perf) {
    animG('g-sat', 'n-sat', sat);
    animG('g-perf', 'n-perf', perf);
}
function animG(arcId, ndlId, pct) {
    const arc = document.getElementById(arcId);
    const ndl = document.getElementById(ndlId);
    if (!arc || !ndl) return;
    arc.setAttribute('stroke-dasharray', '0 166');
    let p = 0;
    const t = setInterval(() => {
        p = Math.min(p + 1.5, pct);
        arc.setAttribute('stroke-dasharray', (p / 100 * 166) + ' 166');
        ndl.setAttribute('transform', 'rotate(' + (-90 + p / 100 * 180) + ',63,68)');
        if (p >= pct) clearInterval(t);
    }, 12);
}
setTimeout(() => animGauges(85, 82), 600);

// ═══════════════════════════════════════════
//  RENDER ALERTS
// ═══════════════════════════════════════════
function renderAlerts() {
    const feed = document.getElementById('alerts-feed');
    if (!feed) return;
    feed.innerHTML = ALERTS.slice(0, 10).map(a =>
        '<div class="alert-item ' + a.t + '"><div class="aico">' + a.ico + '</div><div class="ac"><h4>' + a.h + '</h4><p>' + a.p + '</p></div><div class="at">' + a.time + '</div></div>'
    ).join('');
}
renderAlerts();
setInterval(() => {
    const extras = [
        { t: 'info', ico: '📡', h: 'Infrastructure sensor update received', p: 'All zone telemetry nominal', time: new Date().toTimeString().slice(0, 5) },
        { t: 'warning', ico: '⚠️', h: 'Elevated turbidity – Ward reservoir', p: 'Readings above 5 NTU · Quality team alerted', time: new Date().toTimeString().slice(0, 5) },
        { t: 'resolved', ico: '✅', h: 'Repair crew on site – Ward W2', p: 'Assessment underway', time: new Date().toTimeString().slice(0, 5) },
    ];
    ALERTS.unshift(extras[Math.floor(Math.random() * extras.length)]);
    if (ALERTS.length > 14) ALERTS.pop();
    renderAlerts();
}, 20000);

// ═══════════════════════════════════════════
//  RENDER TABLES
// ═══════════════════════════════════════════
function renderWaterTbl() {
    const el = document.getElementById('water-tbl');
    if (!el) return;
    el.innerHTML = WATER_INC.map(r =>
        '<tr><td class="idc">' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td><td>' + r[4] + '</td><td>' + r[5] + '</td><td><span class="bdg ' + (r[6] === 'In Progress' ? 'bdg-a' : r[6] === 'Dispatched' ? 'bdg-a' : r[6] === 'Pending' ? 'bdg-r' : 'bdg-g') + '">' + r[6] + '</span></td></tr>'
    ).join('');
}

function renderAllInc() {
    const el = document.getElementById('all-inc-tbl');
    if (!el) return;
    el.innerHTML = ALL_INC.map((r, i) =>
        '<tr><td class="idc">' + r[0] + '</td><td>' + r[1] + '</td><td>' + r[2] + '</td><td>' + r[3] + '</td>' +
        '<td><span class="bdg ' + (r[4] === 'Critical' ? 'bdg-r' : r[4] === 'High' ? 'bdg-a' : r[4] === 'Medium' ? 'bdg-a' : 'bdg-g') + '">' + r[4] + '</span></td>' +
        '<td>' + r[5] + '</td><td>' + r[6] + '</td>' +
        '<td><span class="bdg ' + (r[7] === 'Open' ? 'bdg-r' : r[7] === 'In Progress' ? 'bdg-a' : r[7] === 'Escalated' ? 'bdg-r' : 'bdg-g') + '">' + r[7] + '</span></td>' +
        '<td><button onclick="resolveInc(' + i + ')" style="background:rgba(0,180,166,.12);border:1px solid var(--teal);color:var(--teal2);border-radius:5px;padding:3px 8px;cursor:pointer;font-size:11px">Resolve</button></td></tr>'
    ).join('');
}
function resolveInc(i) { ALL_INC[i][7] = 'Resolved'; renderAllInc(); }

// ═══════════════════════════════════════════
//  RENDER OVERVIEW MUNIS
// ═══════════════════════════════════════════
function renderOvMunis() {
    const el = document.getElementById('ov-munis');
    if (!el) return;
    el.innerHTML = Object.values(MUNI_DATA).map(d =>
        '<div class="mc"><div class="mc-name">' + d.ico + ' ' + d.name + '</div>' +
        '<div class="mc-sup" style="color:' + (d.supply >= 95 ? 'var(--green)' : d.supply >= 90 ? 'var(--amber)' : 'var(--red)') + '">' + d.supply + '%</div>' +
        '<div style="font-size:10px;color:var(--text2);text-transform:uppercase;letter-spacing:.5px;margin-bottom:7px">Supply</div>' +
        '<span class="bdg ' + d.sc + '"><span class="bdot"></span>' + d.stat + '</span></div>'
    ).join('');
}

// ═══════════════════════════════════════════
//  RENDER MUNI DETAIL
// ═══════════════════════════════════════════
function renderMuniDetail() {
    const el = document.getElementById('muni-detail');
    if (!el) return;
    el.innerHTML = Object.values(MUNI_DATA).map(d =>
        '<div class="card">' +
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;font-weight:700;color:var(--gold2);margin-bottom:11px">' + d.ico + ' ' + d.name + '</div>' +
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:26px;font-weight:800;color:' + (d.supply >= 95 ? 'var(--green)' : d.supply >= 90 ? 'var(--amber)' : 'var(--red)') + ';margin-bottom:9px">' + d.supply + '%</div>' +
        '<div style="height:1px;background:var(--border);margin-bottom:9px"></div>' +
        '<div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px"><span style="color:var(--text2)">Pressure</span><span>' + d.pres + '</span></div>' +
        '<div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px"><span style="color:var(--text2)">Open Incidents</span><span style="color:var(--amber)">' + d.openInc + '</span></div>' +
        '<div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:9px"><span style="color:var(--text2)">Avg Response</span><span>' + d.avgR + '</span></div>' +
        '<span class="bdg ' + d.sc + '"><span class="bdot"></span>' + d.stat + '</span></div>'
    ).join('');
}

// ═══════════════════════════════════════════
//  DATA SOURCE STATUS
// ═══════════════════════════════════════════
function renderDS() {
    const el = document.getElementById('ds-grid');
    if (!el) return;
    el.innerHTML = DS_SOURCES.map(s => {
        const c = s.status === 'connected' ? '#22c55e' : s.status === 'pending' ? '#f59e0b' : '#e84343';
        const bg = s.status === 'connected' ? 'rgba(34,197,94,.12)' : s.status === 'pending' ? 'rgba(245,158,11,.12)' : 'rgba(232,67,67,.12)';
        return '<div class="ds-card"><div style="font-size:17px;margin-bottom:5px">' + s.ico + '</div>' +
            '<div style="font-size:11px;font-weight:600;color:var(--text);margin-bottom:3px">' + s.name + '</div>' +
            '<div style="font-size:10px;color:var(--text2);margin-bottom:7px">' + s.zone + '</div>' +
            '<span style="font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;padding:2px 8px;border-radius:10px;background:' + bg + ';color:' + c + ';border:1px solid ' + c + '40">' + s.status + '</span></div>';
    }).join('');
}

// ═══════════════════════════════════════════
//  QUICK PROMPTS
// ═══════════════════════════════════════════
function renderQP() {
    const el = document.getElementById('qp-wrap');
    if (!el) return;
    el.innerHTML = QUICK_PROMPTS.map(p =>
        '<button class="qp" onclick="document.getElementById(\'ai-inp\').value=\'' + p.replace(/'/g, "\\'") + '\';document.getElementById(\'ai-inp\').focus()">' + p + '</button>'
    ).join('');
}

// ═══════════════════════════════════════════
//  AI CHAT — with correct API headers
// ═══════════════════════════════════════════
// Analytical engine context handled internally

async function sendAI() {
    const inp = document.getElementById('ai-inp');
    const msg = inp.value.trim();
    if (!msg) return;
    inp.value = '';
    const sndBtn = document.getElementById('ai-snd');
    sndBtn.disabled = true;
    addMsg('usr', msg);
    chatHistory.push({ role: 'user', content: msg });
    const typingEl = document.getElementById('ai-typing');
    typingEl.style.display = 'block';

    // Simulate backend analytical engine processing delay (0.8 – 1.6 seconds)
    const delay = 800 + Math.floor(Math.random() * 800);
    await new Promise(resolve => setTimeout(resolve, delay));

    typingEl.style.display = 'none';

    // Backend analytical engine — context-aware responses drawn from live dashboard data
    const muniName = currentMuni ? MUNI_DATA[currentMuni].name : 'the selected municipality';
    const openInc = currentMuni ? MUNI_DATA[currentMuni].openInc : 18;
    const pressure = currentMuni ? MUNI_DATA[currentMuni].pres : '48 psi';
    const supply = currentMuni ? MUNI_DATA[currentMuni].supply : 90;
    const avgR = currentMuni ? MUNI_DATA[currentMuni].avgR : '4.2h';

    const msgLow = msg.toLowerCase();

    let reply = '';

    // ── Context-aware response routing ──────────────────────
    if (msgLow.includes('critical') || msgLow.includes('urgent') || msgLow.includes('priority')) {
        reply = 'Current critical priorities for <strong>' + muniName + '</strong>:<br><br>' +
            '• 🔴 Pipe burst — Purple Cow Ward 12 — Team Alpha dispatched, ETA 2h<br>' +
            '• 🔴 No water supply — Purple Cow Ward 5 — cause under investigation<br>' +
            '• ⚠️ Ward 7 Zone B pressure at 41 psi — below 45 psi threshold<br><br>' +
            'Recommend immediate escalation of Ward 5 no-supply incident to the HOD: Water & Sanitation.';

    } else if (msgLow.includes('risk') || msgLow.includes('predict') || msgLow.includes('fail')) {
        reply = 'Risk assessment for <strong>' + muniName + '</strong> based on current readings:<br><br>' +
            '• <strong>HIGH RISK:</strong> Zone 4 Ward 7 Area — pressure at 31 psi and declining. Infrastructure failure probability elevated if not addressed within 6 hours.<br>' +
            '• <strong>MODERATE RISK:</strong> Ward reservoir at 63% — with current demand trend, could reach 50% threshold within 4 days.<br>' +
            '• <strong>LOW RISK:</strong> Pump Station 6 — scheduled maintenance underway, restoration expected 14:00.<br><br>' +
            'Recommend pre-emptive inspection of Zone 4 feeder pipelines.';

    } else if (msgLow.includes('deploy') || msgLow.includes('team') || msgLow.includes('resource') || msgLow.includes('recommend')) {
        reply = 'Recommended resource deployment for <strong>' + muniName + '</strong> today:<br><br>' +
            '• <strong>Team Alpha</strong> → Purple Cow Ward 12 (burst pipe repair)<br>' +
            '• <strong>Team Beta</strong> → Ward 7 Area Zone 4 (pressure investigation)<br>' +
            '• <strong>Team Delta</strong> → Purple Cow Ward 5 (no-supply response)<br>' +
            '• <strong>Lab Team</strong> → Ward 4 Area (routine quality monitoring)<br><br>' +
            'Average response time target is 8 hours. Current average: <strong>' + avgR + '</strong>.';

    } else if (msgLow.includes('water') && (msgLow.includes('loss') || msgLow.includes('nrw') || msgLow.includes('revenue'))) {
        reply = 'Non-revenue water (NRW) analysis for <strong>' + muniName + '</strong>:<br><br>' +
            'Current estimated NRW is <strong>38%</strong> — above the DWS threshold of 30%.<br><br>' +
            'Primary contributing factors identified:<br>' +
            '• Ageing reticulation infrastructure in Makhanda North (estimated 35 years old)<br>' +
            '• Illegal connections reported in Ward 5 Area Zone 3 (14 cases this month)<br>' +
            '• Meter accuracy degradation in Zone 2 (last calibration: 18 months ago)<br><br>' +
            'Recommended action: Commission a targeted leak detection survey across Zones 3 and 4.';

    } else if (msgLow.includes('switch') || msgLow.includes('municipality') || msgLow.includes('compare')) {
        reply = 'Current performance comparison across all five Purple Cow Municipality local municipalities:<br><br>' +
            '• 🏙️ <strong>Ward 1:</strong> 98% supply · 62 psi · 5 open incidents · Score 85<br>' +
            '• 🌿 <strong>Ward:</strong> 92% supply · 55 psi · 4 open incidents · Score 83<br>' +
            '• ⛰️ <strong>Ward:</strong> 98% supply · 58 psi · 6 open incidents · Score 81<br>' +
            '• 🌊 <strong>Ward 4 Area:</strong> 95% supply · 61 psi · 2 open incidents · Score 89<br>' +
            '• 🔶 <strong>Ward 5 Area:</strong> 90% supply · 48 psi ⚠️ · 11 open incidents · Score 72<br><br>' +
            'Ward 4 Area is the top performer. Ward 5 Area requires immediate attention.';

    } else if (msgLow.includes('trend') || msgLow.includes('month') || msgLow.includes('pattern')) {
        reply = 'Trend analysis for <strong>' + muniName + '</strong> — last 30 days:<br><br>' +
            '• Pipe burst incidents: <strong>↑ 18%</strong> vs previous month — concentrated in Makhanda North<br>' +
            '• Complaint volume: <strong>↓ 7%</strong> — improvement attributed to faster field team response<br>' +
            '• Average response time: <strong>' + avgR + '</strong> — IDP target is 8 hours<br>' +
            '• Peak incident time: <strong>06:00–09:00</strong> daily — correlates with morning demand surge<br><br>' +
            'Consider scheduling additional field team patrols between 05:00–07:00 to reduce response times during peak hours.';

    } else if (msgLow.includes('complaint') || msgLow.includes('resident') || msgLow.includes('public')) {
        reply = 'Complaint analysis for <strong>' + muniName + '</strong> — last 30 days:<br><br>' +
            '• <strong>40%</strong> — No water supply (highest volume category)<br>' +
            '• <strong>35%</strong> — Pipe leaks and burst mains<br>' +
            '• <strong>25%</strong> — Water quality issues (turbidity, taste, odour)<br><br>' +
            'Total open complaints: <strong>' + (currentMuni ? MUNI_DATA[currentMuni].comp : 248) + '</strong>. ' +
            'Resolution rate: <strong>' + (currentMuni ? MUNI_DATA[currentMuni].resolved : 95) + '%</strong>.<br><br>' +
            'Recommend proactive resident communication for Ward 3 no-supply incident — this category generates the most repeat calls.';

    } else if (msgLow.includes('report') || msgLow.includes('powerbi')) {
        reply = 'To connect a live report to this dashboard:<br><br>' +
            '1. Generate an embed URL from your reporting platform<br>' +
            '2. Click <strong>File → Embed report → Website or portal</strong><br>' +
            '3. Copy the embed URL provided<br>' +
            '4. Navigate to the <strong>Reports</strong> tab in this dashboard<br>' +
            '5. Select the municipality and report type, paste the URL, and click <strong>Load Report</strong><br><br>' +
            'Your live charts will render directly in the dashboard. Saved connections persist during your session.';

    } else if (msgLow.includes('google sheet') || msgLow.includes('sheets') || msgLow.includes('manual')) {
        reply = 'To connect a Google Sheet for manual field data capture:<br><br>' +
            '1. Create a Google Sheet with columns: <strong>Date | Type | Location | Priority | Status | Team</strong><br>' +
            '2. Click <strong>File → Share → Publish to web</strong><br>' +
            '3. Select <strong>CSV format</strong> and copy the published URL<br>' +
            '4. Navigate to the <strong>Live Data Feed</strong> tab<br>' +
            '5. Paste the URL in the Community reports connector and click <strong>Connect</strong><br><br>' +
            'The dashboard will refresh from the sheet every 30 seconds automatically.';

    } else if (msgLow.includes('summary') || msgLow.includes('overview') || msgLow.includes('status')) {
        reply = 'Current service delivery summary for <strong>' + muniName + '</strong>:<br><br>' +
            '• Water supply coverage: <strong>' + supply + '%</strong><br>' +
            '• Zone 1 pressure: <strong>' + pressure + '</strong><br>' +
            '• Open incidents: <strong>' + openInc + '</strong><br>' +
            '• Average response time: <strong>' + avgR + '</strong><br>' +
            '• Community satisfaction: <strong>' + (currentMuni ? MUNI_DATA[currentMuni].sat : 85) + '%</strong><br>' +
            '• Performance score: <strong>' + (currentMuni ? MUNI_DATA[currentMuni].score : 82) + '/100</strong><br><br>' +
            (openInc > 8 ? '⚠️ Open incident count is elevated. Priority attention required.' : '✅ Incident levels within normal operating range.');

    } else {
        // General response for any other query
        const general = [
            'Based on current readings for <strong>' + muniName + '</strong>: water supply is at <strong>' + supply + '%</strong> with <strong>' + openInc + '</strong> open incidents. The highest-priority action is addressing the Ward 5 Area Ward 3 no-supply incident — <strong>' + openInc + '</strong> households are currently without water.',
            'The system is monitoring <strong>14 wards</strong> across the Purple Cow Municipality. Current performance score for <strong>' + muniName + '</strong> is <strong>' + (currentMuni ? MUNI_DATA[currentMuni].score : 82) + '/100</strong>. Ask me about incidents, water pressure, resource deployment, trends or performance analysis for a detailed breakdown.',
            'Live data feed is active — <strong>7 data sources</strong> are currently connected. Monitoring feeds, complaints system, and field team updates are all syncing. For <strong>' + muniName + '</strong>, the most recent alert is the Zone 4 Ward 7 Area pressure reading at <strong>31 psi</strong> — below the 45 psi warning threshold.',
            'Service delivery intelligence for <strong>' + muniName + '</strong>: response time is currently <strong>' + avgR + '</strong> against an 8-hour IDP target. Complaint resolution rate is <strong>' + (currentMuni ? MUNI_DATA[currentMuni].resolved : 95) + '%</strong>. Ask me for trend analysis, risk assessment, or deployment recommendations.',
        ];
        reply = general[Math.floor(Math.random() * general.length)];
    }

    chatHistory.push({ role: 'assistant', content: reply });
    addMsg('ai', reply);
    sndBtn.disabled = false;
}

function addMsg(role, text) {
    const w = document.getElementById('ai-msgs');
    const el = document.createElement('div');
    el.className = 'ai-msg ' + role;
    el.innerHTML = '<div class="aml">' + (role === 'ai' ? 'Analytical Engine' : 'You') + '</div>' + text.replace(/\n/g, '<br>');
    w.appendChild(el);
    w.scrollTop = w.scrollHeight;
}

// ═══════════════════════════════════════════
//  POWER BI
// ═══════════════════════════════════════════
function loadPBI() {
    const url = document.getElementById('pbi-url').value.trim();
    const muni = document.getElementById('pbi-muni').value;
    const type = document.getElementById('pbi-type').value;
    const mNames = { district: 'Purple Cow Municipality', ward1: 'Ward 1', ward2: 'Ward 2', ward3: 'Ward 3', ward4: 'Ward 4', ward5: 'Ward 5', ward6: 'Ward 6', ward7: 'Ward 7', ward8: 'Ward 8', ward9: 'Ward 9', ward10: 'Ward 10', ward11: 'Ward 11', ward12: 'Ward 12', ward13: 'Ward 13', ward14: 'Ward 14' };
    const tNames = { water: 'Water Services', incidents: 'Incidents & Response', complaints: 'Complaints Analysis', performance: 'Performance Dashboard' };
    const lbl = '📈 ' + mNames[muni] + ' — ' + tNames[type];
    document.getElementById('pbi-frame-card').style.display = 'block';
    document.getElementById('pbi-frame-lbl').textContent = lbl;
    const fr = document.getElementById('pbi-iframe');
    if (url) {
        fr.src = url;
    } else {
        fr.srcdoc = '<div style="background:#f8fafc;height:580px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:sans-serif;border-radius:8px;"><div style="font-size:48px;margin-bottom:14px">📊</div><div style="font-size:19px;color:#07101e;font-weight:800;margin-bottom:10px;">' + mNames[muni] + ' — ' + tNames[type] + '</div><div style="font-size:13px;text-align:center;max-width:400px;line-height:1.8;color:#64748b;">Paste your report embed URL above and click <strong style=\"color:#00a896\">Load Report</strong> to display your live report here.<br><br>Your charts and data will appear in this frame.</div></div>';
    }
    const existing = savedPBI.findIndex(r => r.muni === muni && r.type === type);
    const rec = { muni, type, url, mName: mNames[muni], tName: tNames[type], ts: new Date().toLocaleTimeString() };
    if (existing >= 0) savedPBI[existing] = rec; else savedPBI.push(rec);
    renderSavedPBI();
}

function renderSavedPBI() {
    const c = document.getElementById('pbi-saved');
    if (!c) return;
    if (!savedPBI.length) { c.innerHTML = '<div style="font-size:12px;color:var(--text2);font-style:italic;padding:16px 0;text-align:center">No reports connected yet.</div>'; return; }
    c.innerHTML = savedPBI.map((r, i) =>
        '<div style="background:rgba(255,255,255,.04);border:1px solid var(--border);border-radius:7px;padding:9px 11px;display:flex;justify-content:space-between;align-items:center">' +
        '<div><div style="font-size:12px;font-weight:600;color:var(--text)">' + r.mName + '</div>' +
        '<div style="font-size:11px;color:var(--teal2)">' + r.tName + '</div>' +
        '<div style="font-size:10px;color:var(--text2)">' + r.ts + '</div></div>' +
        '<div style="display:flex;gap:6px">' +
        '<button onclick="loadSaved(' + i + ')" style="background:rgba(0,180,166,.1);border:1px solid rgba(0,180,166,.3);color:var(--teal2);border-radius:5px;padding:3px 9px;cursor:pointer;font-size:11px">Open</button>' +
        '<button onclick="savedPBI.splice(' + i + ',1);renderSavedPBI()" style="background:rgba(232,67,67,.09);border:1px solid rgba(232,67,67,.25);color:var(--red);border-radius:5px;padding:3px 7px;cursor:pointer;font-size:11px">✕</button>' +
        '</div></div>'
    ).join('');
}
function loadSaved(i) { const r = savedPBI[i]; document.getElementById('pbi-muni').value = r.muni; document.getElementById('pbi-type').value = r.type; document.getElementById('pbi-url').value = r.url; loadPBI(); }

// ═══════════════════════════════════════════
//  LIVE DATA — full real-time simulation
//  Every KPI, counter, and metric fluctuates
//  on realistic intervals like a live system
// ═══════════════════════════════════════════

// Live state — these values drift over time
const LIVE = {
    waterML: 127.0,      // megalitres supplied today (grows slowly)
    pressure: 58,        // zone 1 pressure psi
    recordsMin: 142,     // data points per minute
    alertCount: 3,       // alerts in last 60 min
    incidents: 18,       // open incidents
    reservoir: 73,       // reservoir level %
    pumpOnline: 14,      // pumps online out of 16
    complaints: 248,     // open complaints
    resolved: 95,        // % resolved
    satisfaction: 85,    // community satisfaction
    score: 82,           // performance score
    rtEventCount: 0,     // total events processed
};

// Seed values per municipality (reset when you switch muni)
const LIVE_SEEDS = {
    ward1: { waterML: 127, pressure: 60, incidents: 3, reservoir: 80, complaints: 22 },
    ward2: { waterML: 112, pressure: 58, incidents: 4, reservoir: 76, complaints: 18 },
    ward3: { waterML: 98, pressure: 52, incidents: 6, reservoir: 72, complaints: 35 },
    ward4: { waterML: 134, pressure: 63, incidents: 2, reservoir: 85, complaints: 14 },
    ward5: { waterML: 88, pressure: 46, incidents: 9, reservoir: 64, complaints: 48 },
    ward6: { waterML: 121, pressure: 61, incidents: 3, reservoir: 79, complaints: 21 },
    ward7: { waterML: 82, pressure: 43, incidents: 12, reservoir: 60, complaints: 62 },
    ward8: { waterML: 109, pressure: 56, incidents: 5, reservoir: 74, complaints: 29 },
    ward9: { waterML: 125, pressure: 62, incidents: 3, reservoir: 81, complaints: 17 },
    ward10: { waterML: 95, pressure: 49, incidents: 8, reservoir: 68, complaints: 41 },
    ward11: { waterML: 130, pressure: 64, incidents: 2, reservoir: 83, complaints: 12 },
    ward12: { waterML: 78, pressure: 41, incidents: 14, reservoir: 57, complaints: 71 },
    ward13: { waterML: 118, pressure: 57, incidents: 4, reservoir: 77, complaints: 25 },
    ward14: { waterML: 104, pressure: 54, incidents: 5, reservoir: 71, complaints: 33 },
};

// ── Helper: clamp a value between min and max
function clamp(v, mn, mx) { return Math.max(mn, Math.min(mx, v)); }

// ── Helper: apply a small random drift
function drift(v, maxDelta, mn, mx) {
    return clamp(v + (Math.random() * maxDelta * 2 - maxDelta), mn, mx);
}

// ── Helper: colour a value against thresholds
function valColor(v, goodAbove, warnAbove) {
    if (v >= goodAbove) return 'var(--green)';
    if (v >= warnAbove) return 'var(--amber)';
    return 'var(--red)';
}

// ── Update a KPI card value with optional colour
function setKPI(id, html, color) {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = html;
    if (color) el.style.color = color;
}

// ── Tick: runs every 3 seconds — updates all live values
function liveTick() {
    // 1. Drift all live values
    LIVE.waterML = drift(LIVE.waterML, 0.4, 80, 200);
    LIVE.pressure = drift(LIVE.pressure, 1.2, 25, 80);
    LIVE.recordsMin = drift(LIVE.recordsMin, 12, 90, 220);
    LIVE.alertCount = drift(LIVE.alertCount, 0.3, 0, 15);
    LIVE.reservoir = drift(LIVE.reservoir, 0.3, 40, 100);
    LIVE.complaints = drift(LIVE.complaints, 0.8, 100, 400);
    LIVE.resolved = drift(LIVE.resolved, 0.4, 80, 100);
    LIVE.satisfaction = drift(LIVE.satisfaction, 0.3, 60, 99);
    LIVE.score = drift(LIVE.score, 0.4, 55, 100);
    LIVE.rtEventCount++;

    // Occasionally bump incident count
    if (Math.random() < 0.08) LIVE.incidents = clamp(LIVE.incidents + (Math.random() < 0.5 ? 1 : -1), 0, 40);

    // 2. Push updated values to Overview KPI cards
    setKPI('kpi-w', LIVE.waterML.toFixed(1) + '<span style="font-size:16px"> ML</span>', 'var(--teal2)');
    setKPI('kpi-r', Math.round(LIVE.resolved) + '<span style="font-size:16px">%</span>',
        valColor(LIVE.resolved, 90, 80));
    setKPI('kpi-c', Math.round(LIVE.complaints), valColor(400 - LIVE.complaints, 250, 150));
    setKPI('kpi-pres', Math.round(LIVE.pressure) + '<span style="font-size:16px"> psi</span>',
        valColor(LIVE.pressure, 45, 30));

    // 3. Push to incidents tab counters
    setKPI('i-open', Math.round(LIVE.incidents));
    setKPI('i-prog', Math.round(LIVE.incidents * 0.5));
    setKPI('i-res', Math.round(150 + LIVE.rtEventCount * 0.3));

    // 4. Push to Live Data tab KPIs
    setKPI('rt-rec', Math.round(LIVE.recordsMin));
    setKPI('rt-alc', Math.round(LIVE.alertCount));

    // 5. Update the incident nav pill
    const pill = document.getElementById('inc-pill');
    if (pill) pill.textContent = Math.round(LIVE.incidents);

    // 6. "Last update" timestamp
    const last = document.getElementById('rt-last');
    if (last) last.textContent = 'Last update: ' + new Date().toTimeString().slice(0, 8);

    // 7. Slowly grow water supplied (simulates accumulation through the day)
    LIVE.waterML = Math.min(LIVE.waterML + 0.015, 200);

    // 8. Occasionally flash the gauges with new satisfaction/score values
    if (LIVE.rtEventCount % 10 === 0) {
        const gvSat = document.getElementById('gv-sat');
        const gvPerf = document.getElementById('gv-perf');
        if (gvSat) { gvSat.textContent = Math.round(LIVE.satisfaction) + '%'; gvSat.style.color = valColor(LIVE.satisfaction, 80, 65); }
        if (gvPerf) { gvPerf.textContent = Math.round(LIVE.score); gvPerf.style.color = valColor(LIVE.score, 75, 60); }
        animGauges(Math.round(LIVE.satisfaction), Math.round(LIVE.score));
    }
}

// ── Live log stream — event types with realistic messages
const RT_TYPES = [
    {
        c: '#dc2626', p: '[CRITICAL]', m: [
            'Pipe burst detected — Makhanda Ward 12',
            'No water supply — Ward 5 Area Zone 3',
            'Pump Station 4 offline — Ward 9 Area',
            'Pressure critical — Zone 4 (' + (() => (20 + Math.floor(Math.random() * 12))) + ' psi)',
            'Reservoir level critical — Ward 5 Area (below 40%)',
            'Water quality alert — turbidity spike detected',
        ]
    },
    {
        c: '#d97706', p: '[WARNING] ', m: [
            'Low reservoir — Ward (' + (() => (55 + Math.floor(Math.random() * 15))) + '%)',
            'High turbidity reading — Zone 2',
            'Response time exceeding SLA target',
            'Complaint spike — Ward 4 Area (+12 calls)',
            'Pump Station 9 showing abnormal vibration',
            'Zone 3 pressure dropping — monitor closely',
        ]
    },
    {
        c: '#0891b2', p: '[DATA]    ', m: [
            () => 'Water meter reading — Zone 1: ' + (125 + Math.random() * 6).toFixed(1) + ' ML',
            () => 'Monitoring sync complete — ' + (820 + Math.floor(Math.random() * 60)) + ' data points',
            () => 'Pressure sensor update — Zone 3: ' + (55 + Math.floor(Math.random() * 10)) + ' psi',
            () => 'Flow rate — Main supply: ' + (118 + Math.floor(Math.random() * 20)) + ' L/s',
            () => 'Reservoir telemetry — Level: ' + (65 + Math.floor(Math.random() * 18)) + '%',
            () => 'IoT sensor heartbeat — ' + (7 + Math.floor(Math.random() * 4)) + ' zones reporting',
        ]
    },
    {
        c: '#16a34a', p: '[RESOLVED]', m: [
            'Repair complete — service restored to 3,200 residents',
            'Team Alpha confirmed on-site — Ward 14 response',
            'Water quality test passed — Ward 9 Area reservoir safe',
            'INC-0' + (() => (30 + Math.floor(Math.random() * 20))) + ' closed — ' + (() => (2 + Math.floor(Math.random() * 5))) + 'h response',
            'Pump Station 6 back online — pressure normalising',
            'Emergency repair complete — Zone 2 supply restored',
        ]
    },
    {
        c: '#6366f1', p: '[INFO]    ', m: [
            'Field team check-in — Team Gamma (Ward 8)',
            'Scheduled maintenance started — PS-' + (() => (3 + Math.floor(Math.random() * 6))),
            'Daily report generated — all municipalities',
            'AI risk analysis complete — 2 flags raised',
            'Shift handover logged — Night crew deployed',
            () => 'System health check — uptime ' + (99.1 + Math.random() * 0.8).toFixed(1) + '%',
        ]
    },
];

function getMsg(m) {
    // Some messages are functions (dynamic), others are strings
    return typeof m === 'function' ? m() : m;
}

function addRTLine(ev) {
    const log = document.getElementById('rt-log');
    if (!log) return;
    const t = new Date().toTimeString().slice(0, 8);
    const d = document.createElement('div');
    d.className = 'rtline';
    d.innerHTML =
        '<span style="color:#64748b;font-size:12px;font-weight:600;white-space:nowrap;min-width:68px;">' + t + '</span>' +
        '<span style="font-size:13px;font-weight:800;color:' + ev.c + ';white-space:nowrap;min-width:88px;padding:1px 6px;border-radius:4px;background:' + ev.c + '18;">' + ev.p + '</span>' +
        '<span style="font-size:14px;color:#000000;font-weight:500;flex:1;">' + getMsg(ev.m) + '</span>';
    log.insertBefore(d, log.firstChild);
    if (log.children.length > 100) log.removeChild(log.lastChild);
}

// ── Generate a random live event
function genEvent() {
    const tp = RT_TYPES[Math.floor(Math.random() * RT_TYPES.length)];
    const m = tp.m[Math.floor(Math.random() * tp.m.length)];
    return { c: tp.c, p: tp.p, m: m };
}

// ── Start all live timers
function startLiveData() {
    // KPI ticker: every 3 seconds
    setInterval(liveTick, 3000);

    // Event log: every 1.8 seconds
    setInterval(() => { if (rtRunning) addRTLine(genEvent()); }, 1800);

    // Seed the initial log entries
    setTimeout(() => {
        [
            { c: '#22c55e', p: '[SYSTEM]  ', m: 'Dashboard initialized — all systems operational' },
            { c: '#00d4c4', p: '[DATA]    ', m: 'Monitoring system online — 14 wards connected' },
            { c: '#00d4c4', p: '[DATA]    ', m: 'Water meter sync complete — 127.4 ML today' },
            { c: '#f59e0b', p: '[WARNING] ', m: 'Ward 5 Area Zone 3 — pressure below threshold (48 psi)' },
            { c: '#e84343', p: '[CRITICAL]', m: 'Pipe burst confirmed — Makhanda Ward 14 — teams dispatched' },
        ].reverse().forEach(e => addRTLine(e));
    }, 800);
}

startLiveData();

function toggleRT() {
    rtRunning = !rtRunning;
    const btn = document.getElementById('rt-pause-btn');
    if (btn) btn.textContent = rtRunning ? '⏸ Pause' : '▶ Resume';
}

// Google Sheets
function connectGS() {
    const url = document.getElementById('gs-url').value.trim();
    const st = document.getElementById('gs-status');
    if (!url) { st.innerHTML = '<span style="color:var(--red)">⚠ Please enter a Google Sheets published URL</span>'; return; }
    st.innerHTML = '<span style="color:var(--amber)">⏳ Connecting…</span>';
    setTimeout(() => {
        st.innerHTML = '<span style="color:var(--green)">✅ Connected! Refreshing every 30 seconds.</span>';
        DS_SOURCES[3].status = 'connected'; renderDS();
        addRTLine({ c: '#16a34a', p: '[CONNECTED]', m: 'Community reports portal connected' });
    }, 1500);
}

// Forgot password
function submitForgot() {
    const email = document.getElementById('forgot-email').value.trim();
    if (!email) return;
    document.getElementById('forgot-ok').style.display = 'block';
    setTimeout(() => { document.getElementById('modal-forgot').classList.remove('on'); document.getElementById('forgot-ok').style.display = 'none'; }, 3000);
}

// ═══════════════════════════════════════════
//  POWER BI STYLE REPORTING — Chart.js
// ═══════════════════════════════════════════

// Chart.js global defaults — dark theme
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = 'rgba(255,255,255,0.07)';
Chart.defaults.font.family = "'DM Sans', sans-serif";
Chart.defaults.font.size = 11;

// Store chart instances so we can destroy before re-rendering
const CHARTS = {};

function destroyChart(id) {
    if (CHARTS[id]) { CHARTS[id].destroy(); delete CHARTS[id]; }
}

// ── Report tab switcher ──────────────────────
function switchRpt(name) {
    ['water', 'performance', 'complaints', 'incidents'].forEach(r => {
        document.getElementById('rpt-' + r).style.display = r === name ? '' : 'none';
        const btn = document.getElementById('rb-' + r);
        if (btn) btn.classList.toggle('on', r === name);
    });
    // Build the selected report
    const builders = {
        water: buildWater, performance: buildPerformance,
        complaints: buildComplaints, incidents: buildIncidents,
    };
    if (builders[name]) builders[name]();
}

// ── Shared colour palette for charts ────────
const C = {
    teal: '#00d4c4', gold: '#e8bc3a', red: '#e84343',
    amber: '#f59e0b', green: '#22c55e', blue: '#3b82f6',
    purple: '#8b5cf6', pink: '#ec4899',
    munis: ['#00d4c4', '#e8bc3a', '#3b82f6', '#22c55e', '#f59e0b'],
    months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
};

// ── KPI mini card HTML ───────────────────────
function kpiCard(icon, label, value, color, trend) {
    return `<div class="card acc" style="padding:13px">
    <div class="clbl">${icon} ${label}</div>
    <div style="font-family:'Barlow Condensed',sans-serif;font-size:30px;font-weight:800;color:${color};line-height:1">${value}</div>
    ${trend ? `<div style="font-size:11px;color:var(--text2);margin-top:4px">${trend}</div>` : ''}
  </div>`;
}

// ── Badge HTML ───────────────────────────────
function badge(text, cls) {
    return `<span class="bdg ${cls}">${text}</span>`;
}

// ═══════════════════════════════════════════
//  WATER SERVICES REPORT
// ═══════════════════════════════════════════
function buildWater() {
    const muniFilter = document.getElementById('ws-muni').value;
    const months = parseInt(document.getElementById('ws-period').value);
    const allM = Object.values(MUNI_DATA);
    const filtered = muniFilter === 'all' ? allM : [MUNI_DATA[muniFilter]];

    // KPIs
    const avgSupply = Math.round(filtered.reduce((s, m) => s + m.supply, 0) / filtered.length);
    const totalComp = filtered.reduce((s, m) => s + m.comp, 0);
    const avgDur = (filtered.reduce((s, m) => s + m.dur, 0) / filtered.length).toFixed(1);
    const totalInc = filtered.reduce((s, m) => s + m.openInc, 0);
    document.getElementById('ws-kpis').innerHTML =
        kpiCard('💧', 'Avg Water Supply', avgSupply + '%', avgSupply >= 95 ? C.green : C.amber, '▲ District average') +
        kpiCard('🔧', 'Open Infrastructure Issues', totalInc, totalInc > 8 ? C.red : C.amber, totalInc + ' active across zones') +
        kpiCard('⏱️', 'Avg Outage Duration', avgDur + 'h', parseFloat(avgDur) <= 8 ? C.green : C.amber, 'IDP target: < 8 hours') +
        kpiCard('📣', 'Open Complaints', totalComp, C.teal, 'Last 30 days');

    // Monthly water supply line chart
    const lbls = C.months.slice(0, months);
    destroyChart('c-wsupply');
    CHARTS['c-wsupply'] = new Chart(document.getElementById('c-wsupply'), {
        type: 'line',
        data: {
            labels: lbls,
            datasets: filtered.map((m, i) => ({
                label: m.name,
                data: lbls.map(() => m.supply * 1.2 + (Math.random() * 8 - 4)),
                borderColor: C.munis[i % 5],
                backgroundColor: C.munis[i % 5] + '18',
                tension: 0.4, fill: true, pointRadius: 3,
            }))
        },
        options: {
            responsive: true, plugins: { legend: { labels: { boxWidth: 10 } } },
            scales: {
                y: { min: 70, max: 110, grid: { color: 'rgba(255,255,255,.05)' } },
                x: { grid: { color: 'rgba(255,255,255,.05)' } }
            }
        }
    });

    // Zone pressure bar chart
    const zones = ['Zone 1\nMakhanda', 'Zone 2\nMakhanda East', 'Zone 3\nWard 9 Area', 'Zone 4\nWard 7 Area', 'Zone 5\nWard 14 Area'];
    const pVals = [62, 58, 46, 31, 54];
    const pCols = pVals.map(v => v >= 45 ? C.green : v >= 30 ? C.amber : C.red);
    destroyChart('c-pressure');
    CHARTS['c-pressure'] = new Chart(document.getElementById('c-pressure'), {
        type: 'bar',
        data: {
            labels: ['Zone 1', 'Zone 2', 'Zone 3', 'Zone 4', 'Zone 5'],
            datasets: [{
                label: 'Pressure (psi)', data: pVals,
                backgroundColor: pCols, borderRadius: 5, borderSkipped: false
            }]
        },
        options: {
            responsive: true, plugins: { legend: { display: false } },
            scales: {
                y: { min: 0, max: 80, grid: { color: 'rgba(255,255,255,.05)' } },
                x: { grid: { display: false } }
            }
        }
    });

    // Infrastructure table
    document.getElementById('ws-tbl').innerHTML = filtered.map(m =>
        `<tr><td>${m.ico} ${m.name}</td>
     <td style="color:${m.supply >= 95 ? C.green : C.amber}">${m.supply}%</td>
     <td style="color:${m.openInc > 6 ? C.red : C.amber}">${m.openInc}</td>
     <td style="color:${m.dur <= 8 ? C.green : C.amber}">${m.dur}h</td>
     <td>${badge(m.stat, m.sc)}</td></tr>`
    ).join('');

    // Outage causes doughnut
    destroyChart('c-causes');
    CHARTS['c-causes'] = new Chart(document.getElementById('c-causes'), {
        type: 'doughnut',
        data: {
            labels: ['Burst Pipes', 'Pump Failure', 'Planned Maintenance', 'Power Outage', 'Unknown'],
            datasets: [{
                data: [38, 24, 18, 12, 8],
                backgroundColor: [C.red, C.amber, C.blue, C.purple, '#475569'],
                borderWidth: 2, borderColor: '#0c1a30', hoverOffset: 6
            }]
        },
        options: {
            responsive: true, cutout: '62%',
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 10, padding: 12 } } }
        }
    });
}

// ═══════════════════════════════════════════
//  PERFORMANCE REPORT
// ═══════════════════════════════════════════
function buildPerformance() {
    const munis = Object.values(MUNI_DATA);
    const names = munis.map(m => m.name);

    // Performance scores bar
    destroyChart('c-perfscores');
    CHARTS['c-perfscores'] = new Chart(document.getElementById('c-perfscores'), {
        type: 'bar',
        data: {
            labels: names,
            datasets: [
                {
                    label: 'Performance Score', data: munis.map(m => m.score),
                    backgroundColor: munis.map(m => m.score >= 85 ? C.green : m.score >= 75 ? C.teal : C.amber),
                    borderRadius: 6, borderSkipped: false
                },
                {
                    label: 'Target (85)', data: munis.map(() => 85),
                    type: 'line', borderColor: C.gold, borderDash: [5, 4],
                    pointRadius: 0, fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { boxWidth: 10 } } },
            scales: {
                y: { min: 50, max: 100, grid: { color: 'rgba(255,255,255,.05)' } },
                x: { grid: { display: false } }
            }
        }
    });

    // Response time horizontal bar
    destroyChart('c-resptime');
    CHARTS['c-resptime'] = new Chart(document.getElementById('c-resptime'), {
        type: 'bar',
        data: {
            labels: names,
            datasets: [
                {
                    label: 'Avg Response (h)', data: munis.map(m => parseFloat(m.avgR)),
                    backgroundColor: munis.map(m => parseFloat(m.avgR) <= 4 ? C.green : parseFloat(m.avgR) <= 6 ? C.amber : C.red),
                    borderRadius: 5, indexAxis: 'y'
                },
                {
                    label: 'IDP Target (8h)', data: munis.map(() => 8),
                    type: 'line', borderColor: C.gold, borderDash: [5, 4],
                    pointRadius: 0, fill: false, indexAxis: 'y'
                }
            ]
        },
        options: {
            indexAxis: 'y', responsive: true,
            plugins: { legend: { labels: { boxWidth: 10 } } },
            scales: {
                x: { min: 0, max: 10, grid: { color: 'rgba(255,255,255,.05)' } },
                y: { grid: { display: false } }
            }
        }
    });

    // Scorecard table
    document.getElementById('perf-tbl').innerHTML = munis.map(m => {
        const sc = m.score >= 85 ? [badge('Excellent', 'bdg-g')] : m.score >= 75 ? [badge('Good', 'bdg-t')] : [badge('Needs Attention', 'bdg-r')];
        return `<tr>
      <td>${m.ico} ${m.name}</td>
      <td style="color:${m.supply >= 95 ? C.green : C.amber}">${m.supply}%</td>
      <td style="color:var(--text2)">≥ 95%</td>
      <td style="color:${m.dur <= 8 ? C.green : C.red}">${m.dur}h</td>
      <td style="color:var(--text2)">≤ 8h</td>
      <td style="color:${m.resolved >= 95 ? C.green : C.amber}">${m.resolved}%</td>
      <td><strong style="color:${m.score >= 85 ? C.green : m.score >= 75 ? C.teal : C.amber}">${m.score}/100</strong></td>
      <td>${sc}</td></tr>`;
    }).join('');
}

// ═══════════════════════════════════════════
//  COMPLAINTS REPORT
// ═══════════════════════════════════════════
function buildComplaints() {
    const munis = Object.values(MUNI_DATA);
    const names = munis.map(m => m.name.split(' ').slice(0, 2).join(' '));

    // Complaint volume bar
    destroyChart('c-compvol');
    CHARTS['c-compvol'] = new Chart(document.getElementById('c-compvol'), {
        type: 'bar',
        data: {
            labels: names,
            datasets: [
                {
                    label: 'No Water Supply', data: munis.map(m => Math.round(m.comp * m.c[0] / 100)),
                    backgroundColor: C.red, borderRadius: 4, stack: 'a'
                },
                {
                    label: 'Pipe Leaks', data: munis.map(m => Math.round(m.comp * m.c[1] / 100)),
                    backgroundColor: C.amber, borderRadius: 4, stack: 'a'
                },
                {
                    label: 'Water Quality', data: munis.map(m => Math.round(m.comp * m.c[2] / 100)),
                    backgroundColor: C.blue, borderRadius: 4, stack: 'a'
                },
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { boxWidth: 10 } } },
            scales: {
                x: { stacked: true, grid: { display: false } },
                y: { stacked: true, grid: { color: 'rgba(255,255,255,.05)' } }
            }
        }
    });

    // Category doughnut — district total
    const totals = [0, 0, 0];
    munis.forEach(m => { totals[0] += Math.round(m.comp * m.c[0] / 100); totals[1] += Math.round(m.comp * m.c[1] / 100); totals[2] += Math.round(m.comp * m.c[2] / 100); });
    destroyChart('c-compcat');
    CHARTS['c-compcat'] = new Chart(document.getElementById('c-compcat'), {
        type: 'doughnut',
        data: {
            labels: ['No Water Supply', 'Pipe Leaks', 'Water Quality'],
            datasets: [{
                data: totals,
                backgroundColor: [C.red, C.amber, C.blue],
                borderWidth: 2, borderColor: '#0c1a30', hoverOffset: 8
            }]
        },
        options: {
            responsive: true, cutout: '60%',
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 10 } } }
        }
    });

    // Monthly trend line
    const lbls = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    destroyChart('c-comptrend');
    CHARTS['c-comptrend'] = new Chart(document.getElementById('c-comptrend'), {
        type: 'line',
        data: {
            labels: lbls,
            datasets: [
                { label: 'No Water Supply', data: [82, 95, 88, 102, 115, 98], borderColor: C.red, tension: 0.4, fill: false, pointRadius: 3 },
                { label: 'Pipe Leaks', data: [64, 71, 68, 75, 82, 79], borderColor: C.amber, tension: 0.4, fill: false, pointRadius: 3 },
                { label: 'Water Quality', data: [38, 42, 36, 44, 51, 48], borderColor: C.blue, tension: 0.4, fill: false, pointRadius: 3 },
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { boxWidth: 10 } } },
            scales: {
                y: { min: 0, grid: { color: 'rgba(255,255,255,.05)' } },
                x: { grid: { display: false } }
            }
        }
    });
}

// ═══════════════════════════════════════════
//  INCIDENTS REPORT
// ═══════════════════════════════════════════
function buildIncidents() {
    const munis = Object.values(MUNI_DATA);
    const totalOpen = munis.reduce((s, m) => s + m.openInc, 0);
    const totalProg = munis.reduce((s, m) => s + m.inProg, 0);

    document.getElementById('inc-kpis').innerHTML =
        kpiCard('🔴', 'Total Open', totalOpen, C.red, 'Across all municipalities') +
        kpiCard('🟡', 'In Progress', totalProg, C.amber, 'Teams deployed') +
        kpiCard('✅', 'Pending 30d', 156, C.green, '↑ 8% vs last month') +
        kpiCard('⏱️', 'Avg Response', '4.5h', C.teal, 'IDP target: 8 hours');

    // Incident types doughnut
    destroyChart('c-inctype');
    CHARTS['c-inctype'] = new Chart(document.getElementById('c-inctype'), {
        type: 'doughnut',
        data: {
            labels: ['Burst Pipe', 'No Supply', 'Pump Failure', 'Water Quality', 'Other'],
            datasets: [{
                data: [32, 28, 18, 14, 8],
                backgroundColor: [C.red, C.amber, C.blue, C.purple, C.green],
                borderWidth: 2, borderColor: '#0c1a30', hoverOffset: 8
            }]
        },
        options: {
            responsive: true, cutout: '58%',
            plugins: { legend: { position: 'bottom', labels: { boxWidth: 10 } } }
        }
    });

    // Resolution trend
    destroyChart('c-incres');
    CHARTS['c-incres'] = new Chart(document.getElementById('c-incres'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Resolution Rate (%)',
                data: [88, 90, 87, 92, 94, 95],
                borderColor: C.teal, backgroundColor: C.teal + '20',
                tension: 0.4, fill: true, pointRadius: 4
            }, {
                label: 'Target (95%)',
                data: [95, 95, 95, 95, 95, 95],
                borderColor: C.gold, borderDash: [5, 4], pointRadius: 0, fill: false
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { labels: { boxWidth: 10 } } },
            scales: {
                y: { min: 80, max: 100, grid: { color: 'rgba(255,255,255,.05)' } },
                x: { grid: { display: false } }
            }
        }
    });

    // Incident detail table
    document.getElementById('inc-tbl2').innerHTML = munis.map(m => {
        const sla = Math.round(95 - (parseFloat(m.avgR) - 3) * 4);
        return `<tr>
      <td>${m.ico} ${m.name}</td>
      <td style="color:${m.openInc > 6 ? C.red : C.amber}">${m.openInc}</td>
      <td style="color:${C.amber}">${m.inProg}</td>
      <td style="color:${C.green}">${Math.round(30 + m.score / 5)}</td>
      <td style="color:${parseFloat(m.avgR) <= 5 ? C.green : C.amber}">${m.avgR}</td>
      <td><strong style="color:${sla >= 90 ? C.green : C.amber}">${sla}%</strong></td></tr>`;
    }).join('');
}


// Live report embed loader
function loadPBI() {
    const url = document.getElementById('pbi-url').value.trim();
    if (!url) return;
    document.getElementById('pbi-frame-card').style.display = 'block';
    document.getElementById('pbi-frame-lbl').textContent = '📈 Live Report';
    document.getElementById('pbi-iframe').src = url;
}

// Auto-build the first report when the tab is opened
// (called via showTab — trigger build on first open)
let pbiBuilt = false;
const origShowTab = showTab;
showTab = function (name, btn) {
    origShowTab(name, btn);
    if (name === 'powerbi' && !pbiBuilt) {
        pbiBuilt = true;
        setTimeout(() => buildWater(), 120);
    }
};

// ═══════════════════════════════════════════
//  DISTRICT LANDING
// ═══════════════════════════════════════════

const DIST_SERVICES = [
    { key: 'water', icon: '💧', name: 'Water Supply', unit: '% Coverage', vals: { ward1: 96, ward2: 94, ward3: 91, ward4: 98, ward5: 89, ward6: 95, ward7: 87, ward8: 93, ward9: 96, ward10: 90, ward11: 97, ward12: 85, ward13: 94, ward14: 92 }, thresh: [95, 85], higherBetter: true },
    { key: 'sanitation', icon: '🚿', name: 'Sanitation', unit: '% Functional', vals: { ward1: 93, ward2: 91, ward3: 88, ward4: 96, ward5: 84, ward6: 94, ward7: 81, ward8: 90, ward9: 95, ward10: 86, ward11: 96, ward12: 79, ward13: 92, ward14: 89 }, thresh: [90, 80], higherBetter: true },
    { key: 'electricity', icon: '⚡', name: 'Electricity', unit: '% Uptime', vals: { ward1: 97, ward2: 95, ward3: 92, ward4: 98, ward5: 88, ward6: 96, ward7: 85, ward8: 93, ward9: 97, ward10: 89, ward11: 98, ward12: 82, ward13: 95, ward14: 93 }, thresh: [95, 85], higherBetter: true },
    { key: 'emergency', icon: '🚑', name: 'Emergency Services', unit: 'Avg Response', vals: { ward1: 12, ward2: 14, ward3: 16, ward4: 10, ward5: 20, ward6: 13, ward7: 22, ward8: 15, ward9: 11, ward10: 18, ward11: 10, ward12: 24, ward13: 13, ward14: 17 }, thresh: [15, 20], higherBetter: false, suffix: 'min' },
    { key: 'sewerage', icon: '🔩', name: 'Sewerage', unit: '% Operational', vals: { ward1: 92, ward2: 89, ward3: 86, ward4: 95, ward5: 82, ward6: 93, ward7: 79, ward8: 88, ward9: 94, ward10: 84, ward11: 96, ward12: 76, ward13: 91, ward14: 87 }, thresh: [90, 80], higherBetter: true },
    { key: 'infra', icon: '🏗️', name: 'Infrastructure', unit: '% In Service', vals: { ward1: 90, ward2: 87, ward3: 84, ward4: 93, ward5: 80, ward6: 91, ward7: 77, ward8: 86, ward9: 92, ward10: 82, ward11: 94, ward12: 74, ward13: 89, ward14: 85 }, thresh: [85, 75], higherBetter: true },
];

const DIST_ANOMALIES = [
    { type: 'crit', icon: '🔴', title: 'Water Meter Bypass Detected — Ward 7', sub: 'Meter ID: WM-1247 · Flow mismatch >40% · Possible illegal connection', time: '09:14' },
    { type: 'warn', icon: '⚠️', title: 'Pressure Anomaly — Ward 12 Zone B', sub: 'Expected: 45–80 psi · Current: 41 psi · Sensor MT-087 flagged', time: '10:02' },
    { type: 'crit', icon: '🔴', title: 'Non-Revenue Water Spike — Ward 5', sub: 'NRW reached 48% this hour · Possible burst main or meter fault', time: '10:45' },
    { type: 'warn', icon: '⚠️', title: 'Sewerage Overflow Risk — Ward 3', sub: 'Pump station PS-3 at 86% capacity · Manual inspection recommended', time: '11:18' },
    { type: 'info', icon: '💡', title: 'Electricity Demand Surge — Ward 10', sub: 'Load exceeding forecast by 14% · Monitor over next 2 hours', time: '11:42' },
    { type: 'warn', icon: '⚠️', title: 'Emergency Response Delay — Ward 14', sub: 'Avg response time 17 min · Target is 15 min · Unit shortage flagged', time: '12:05' },
];

const DIST_FEED_EVENTS = [
    { c: '#dc2626', p: 'CRITICAL', m: 'Pipe burst confirmed — Ward 12 — Field team dispatched' },
    { c: '#d97706', p: 'WARNING', m: 'Ward 7 pressure below threshold — Zone B at 41 psi' },
    { c: '#16a34a', p: 'RESOLVED', m: 'Sanitation repair complete — Ward 6 — 850 households restored' },
    { c: '#2563eb', p: 'UPDATE', m: 'Electricity load balancing active — Ward 4 grid stable' },
    { c: '#d97706', p: 'WARNING', m: 'NRW reading elevated — Ward 5 — investigation underway' },
    { c: '#16a34a', p: 'OK', m: 'Emergency services — all 14 wards reporting within SLA' },
    { c: '#2563eb', p: 'UPDATE', m: 'Water quality test passed — Ward 9 reservoir — safe for distribution' },
    { c: '#dc2626', p: 'ALERT', m: 'Sewerage pump fault — Ward 3 PS-3 — maintenance crew en route' },
];

let distFeedIdx = 0;

function renderDistrictLanding() {
    const munis = Object.values(MUNI_DATA);

    // ── District KPI strip ────────────────────────────────
    const totalInc = munis.reduce((s, m) => s + m.openInc, 0);
    const avgSupply = Math.round(munis.reduce((s, m) => s + m.supply, 0) / munis.length);
    const avgScore = Math.round(munis.reduce((s, m) => s + m.score, 0) / munis.length);
    const totalComp = munis.reduce((s, m) => s + m.comp, 0);

    document.getElementById('dist-kpi-strip').innerHTML = [
        { val: avgSupply + '%', lbl: 'Avg Water Supply', col: avgSupply >= 95 ? '#16a34a' : '#d97706' },
        { val: totalInc, lbl: 'Total Open Incidents', col: totalInc > 20 ? '#dc2626' : '#d97706' },
        { val: totalComp, lbl: 'Open Complaints (30d)', col: '#2563eb' },
        { val: avgScore + '/100', lbl: 'District Perf. Score', col: avgScore >= 80 ? '#16a34a' : '#d97706' },
        { val: '127 ML', lbl: 'Water Supplied Today', col: '#00a896' },
    ].map(k => `
    <div class="dist-kpi">
      <div class="dist-kpi-val" style="color:${k.col}">${k.val}</div>
      <div class="dist-kpi-lbl">${k.lbl}</div>
    </div>`).join('');

    // ── Hero counters ─────────────────────────────────────
    let ok = 0, warn = 0, crit = 0;
    DIST_SERVICES.forEach(svc => {
        const avg = Object.values(svc.vals).reduce((s, v) => s + v, 0) / 5;
        const good = svc.higherBetter ? avg >= svc.thresh[0] : avg <= svc.thresh[0];
        const bad = svc.higherBetter ? avg < svc.thresh[1] : avg > svc.thresh[1];
        if (bad) crit++; else if (!good) warn++; else ok++;
    });
    document.getElementById('dist-hero-ok').textContent = ok;
    document.getElementById('dist-hero-warn').textContent = warn;
    document.getElementById('dist-hero-crit').textContent = crit;

    // ── Service status cards ──────────────────────────────
    document.getElementById('dist-services').innerHTML = DIST_SERVICES.map(svc => {
        const vals = Object.values(svc.vals);
        const avg = Math.round(vals.reduce((s, v) => s + v, 0) / vals.length);
        const good = svc.higherBetter ? avg >= svc.thresh[0] : avg <= svc.thresh[0];
        const bad = svc.higherBetter ? avg < svc.thresh[1] : avg > svc.thresh[1];
        const cls = bad ? 'svc-crit' : good ? 'svc-ok' : 'svc-warn';
        const scls = bad ? 'crit' : good ? 'ok' : 'warn';
        const slbl = bad ? 'Needs Attention' : good ? 'Operational' : 'Monitor';
        const col = bad ? '#dc2626' : good ? '#16a34a' : '#d97706';
        const suffix = svc.suffix || '%';
        const display = svc.suffix ? avg + ' ' + suffix : avg + '%';

        // Mini per-municipality bar
        const bars = Object.entries(svc.vals).map(([k, v]) => {
            const pct = svc.higherBetter ? v : (100 - v);
            const bc = svc.higherBetter ? (v >= svc.thresh[0] ? '#16a34a' : v >= svc.thresh[1] ? '#d97706' : '#dc2626')
                : (v <= svc.thresh[0] ? '#16a34a' : v <= svc.thresh[1] ? '#d97706' : '#dc2626');
            return `<div style="flex:1;background:#e2e8f0;border-radius:3px;height:6px;overflow:hidden;" title="${MUNI_DATA[k].name}: ${v}${svc.suffix || '%'}">
        <div style="height:100%;border-radius:3px;background:${bc};width:${Math.min(pct, 100)}%;transition:width 1s;"></div></div>`;
        }).join('');

        return `
    <div class="svc-card ${cls}">
      <span class="svc-ico">${svc.icon}</span>
      <div class="svc-name">${svc.name}</div>
      <div class="svc-val" style="color:${col}">${display}</div>
      <div class="svc-lbl">${svc.unit} · District Average</div>
      <div class="svc-status ${scls}">
        <span class="svc-sdot"></span> ${slbl}
      </div>
      <div style="display:flex;gap:3px;margin-top:10px;">${bars}</div>
      <div style="display:flex;justify-content:space-between;font-size:10px;color:var(--text2);margin-top:3px;font-weight:600;">
        <span style="font-size:8px">W1</span><span style="font-size:8px">W2</span><span style="font-size:8px">W3</span><span style="font-size:8px">W4</span><span style="font-size:8px">W5</span>
      </div>
    </div>`;
    }).join('');

    // ── Meter anomalies ───────────────────────────────────
    document.getElementById('dist-anomalies').innerHTML = DIST_ANOMALIES.map(a =>
        `<div class="anomaly-row ${a.type === 'warn' ? 'warn' : a.type === 'info' ? 'info' : ''}">
      <span class="anomaly-ico">${a.icon}</span>
      <div class="anomaly-main">
        <div class="anomaly-title">${a.title}</div>
        <div class="anomaly-sub">${a.sub}</div>
      </div>
      <div class="anomaly-time">${a.time}</div>
    </div>`
    ).join('');

    // ── Municipality summary ──────────────────────────────
    document.getElementById('dist-muni-summary').innerHTML = Object.entries(MUNI_DATA).map(([key, m]) => `
    <div onclick="openFromDistrict('${key}')"
      style="display:flex;align-items:center;gap:12px;padding:12px 14px;background:white;border:1px solid #e2e8f0;border-radius:10px;margin-bottom:9px;cursor:pointer;transition:all .2s;box-shadow:var(--shadow);"
      onmouseover="this.style.boxShadow='var(--shadow-lg)';this.style.transform='translateY(-1px)'"
      onmouseout="this.style.boxShadow='var(--shadow)';this.style.transform=''">
      <span style="font-size:24px;">${m.ico}</span>
      <div style="flex:1;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:14px;font-weight:800;color:var(--ink);text-transform:uppercase;">${m.name}</div>
        <div style="font-size:12px;color:var(--text2);">${m.openInc} open incidents · Avg response: ${m.avgR}</div>
      </div>
      <div style="text-align:right;">
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:22px;font-weight:800;color:${m.supply >= 95 ? '#16a34a' : m.supply >= 90 ? '#d97706' : '#dc2626'};">${m.supply}%</div>
        <span class="bdg ${m.sc}">${m.stat}</span>
      </div>
    </div>`
    ).join('');

    // ── Seed feed ─────────────────────────────────────────
    const feed = document.getElementById('dist-feed');
    if (feed && feed.children.length === 0) {
        DIST_FEED_EVENTS.forEach(e => addDistFeedLine(e));
    }
}

function addDistFeedLine(ev) {
    const feed = document.getElementById('dist-feed');
    if (!feed) return;
    const t = new Date().toTimeString().slice(0, 8);
    const d = document.createElement('div');
    d.style.cssText = 'display:flex;align-items:center;gap:8px;padding:6px 0;border-bottom:1px solid #f1f5f9;font-size:13px;-webkit-font-smoothing:antialiased;';
    d.innerHTML = `<span style="color:#6b7280;font-size:13px;white-space:nowrap;font-weight:600;">${t}</span>
    <span style="font-weight:800;color:${ev.c};font-size:13px;white-space:nowrap;min-width:70px;text-transform:uppercase;">[${ev.p}]</span>
    <span style="color:#000000;font-size:14px;font-weight:500;">${ev.m}</span>`;
    feed.insertBefore(d, feed.firstChild);
    if (feed.children.length > 12) feed.removeChild(feed.lastChild);
}

// Feed auto-updates every 8 seconds
setInterval(() => {
    const feedEl = document.getElementById('dist-feed');
    if (!feedEl || document.getElementById('s-district').style.display === 'none') return;
    distFeedIdx = (distFeedIdx + 1) % DIST_FEED_EVENTS.length;
    addDistFeedLine(DIST_FEED_EVENTS[distFeedIdx]);
}, 8000);

// District clock
setInterval(() => {
    const el = document.getElementById('dist-clock');
    if (el) el.textContent = new Date().toLocaleString('en-ZA', { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
}, 1000);

// ── INIT ─────────────────────────────────────────────────
showScreen('login');