// Data
let people = [
    // S Tier
    { name: "Naziha", tier: "S", phoneTier: "B" },
    { name: "Omar", tier: "S", phoneTier: "B" },
    { name: "Mikyas", tier: "S", phoneTier: "B" },
    { name: "Hamza", tier: "S", phoneTier: "B" },
    { name: "Hussam", tier: "S", phoneTier: "B" },
    // A Tier
    { name: "Laila", tier: "A", phoneTier: "B" },
    { name: "Ali", tier: "A", phoneTier: "B" },
    { name: "Assiya", tier: "A", phoneTier: "B" },
    { name: "Maitham", tier: "A", phoneTier: "B" },
    // B Tier
    { name: "Simon", tier: "B", phoneTier: "B" },
    { name: "Sameeha", tier: "B", phoneTier: "B" },
    { name: "Panos", tier: "B", phoneTier: "B" },
    { name: "Kiki", tier: "B", phoneTier: "B" },
    { name: "Tyrone", tier: "B", phoneTier: "B" },
    { name: "Faizan", tier: "B", phoneTier: "B" },
    { name: "Fatima A", tier: "B", phoneTier: "B" },
    { name: "Axel", tier: "B", phoneTier: "B" },
    { name: "Silmi", tier: "B", phoneTier: "B" },
    { name: "Celine", tier: "B", phoneTier: "B" },
    { name: "Dihya", tier: "B", phoneTier: "B" },
    { name: "Clara", tier: "B", phoneTier: "B" },
    // D Tier
    { name: "Fatima H", tier: "D", phoneTier: "B" },
    { name: "William", tier: "D", phoneTier: "B" },
    { name: "Zahid", tier: "D", phoneTier: "B" },
    { name: "Aristotelis", tier: "D", phoneTier: "B" },
    { name: "Adam", tier: "D", phoneTier: "B" }
];

let laptops = [
    { id: 1, model: "MacBook Air", year: "2025", chip: "", ram: "16GB", storage: "256GB", size: "13\"", colour: "", isNew: false },
    { id: 2, model: "MacBook Pro", year: "2022", chip: "M2", ram: "24GB", storage: "512GB", size: "14\"", colour: "", isNew: false },
    { id: 3, model: "MacBook Pro", year: "2024", chip: "M4", ram: "24GB", storage: "1TB", size: "14\"", colour: "", isNew: false },
    { id: 4, model: "MacBook Pro", year: "2024", chip: "M4", ram: "16GB", storage: "512GB", size: "14\"", colour: "", isNew: false },
    { id: 5, model: "MacBook Pro", year: "2023", chip: "M3", ram: "18GB", storage: "512GB", size: "14\"", colour: "", isNew: false },
    { id: 6, model: "MacBook Pro", year: "2024", chip: "M4", ram: "16GB", storage: "512GB", size: "14\"", colour: "", isNew: false },
    { id: 7, model: "MacBook Air", year: "2025", chip: "M4", ram: "16GB", storage: "256GB", size: "13\"", colour: "", isNew: false },
    { id: 8, model: "MacBook Air 13", year: "2025", chip: "M4", ram: "16GB", storage: "512GB", size: "13\"", colour: "", isNew: false },
    { id: 9, model: "MacBook Pro 16", year: "2024", chip: "M3", ram: "18GB", storage: "512GB", size: "16\"", colour: "", isNew: false },
    { id: 10, model: "MacBook Pro", year: "2024", chip: "M4 Max", ram: "36GB", storage: "1TB", size: "16\"", colour: "", isNew: false },
    { id: 11, model: "MacBook Pro", year: "2024", chip: "M4 Max", ram: "36GB", storage: "1TB", size: "16\"", colour: "", isNew: false },
    { id: 12, model: "MacBook Air", year: "2025", chip: "", ram: "8GB", storage: "512GB", size: "13\"", colour: "", isNew: false },
    { id: 13, model: "MacBook Pro", year: "2023", chip: "M3", ram: "8GB", storage: "1TB", size: "14\"", colour: "", isNew: false },
    { id: 14, model: "MacBook Air", year: "2020", chip: "M1", ram: "32GB", storage: "512GB", size: "13\"", colour: "", isNew: false },
    { id: 15, model: "MacBook Pro", year: "2019", chip: "Intel i5", ram: "8GB", storage: "128GB", size: "13\"", colour: "", isNew: false },
    { id: 16, model: "MacBook Air", year: "2020", chip: "M1", ram: "8GB", storage: "256GB", size: "13\"", colour: "", isNew: false },
    { id: 17, model: "MacBook Air 13", year: "2025", chip: "M4", ram: "24GB", storage: "", size: "13\"", colour: "", isNew: false },
    { id: 18, model: "MacBook Air", year: "2020", chip: "M1", ram: "4GB", storage: "64GB", size: "13\"", colour: "", isNew: false },
    { id: 19, model: "MacBook Air 13", year: "2025", chip: "M4", ram: "24GB", storage: "", size: "13\"", colour: "", isNew: false },
    { id: 20, model: "MacBook Air 13", year: "2025", chip: "M4", ram: "16GB", storage: "256GB", size: "13\"", colour: "", isNew: false },
    { id: 21, model: "Dell XPS", year: "", chip: "", ram: "", storage: "", size: "", colour: "", isNew: false },
    { id: 22, model: "MacBook Air 13", year: "2025", chip: "M4", ram: "24GB", storage: "", size: "13\"", colour: "", isNew: false },
    { id: 23, model: "MacBook Air", year: "2024", chip: "M3", ram: "", storage: "", size: "13\"", colour: "", isNew: false },
    { id: 24, model: "MacBook Pro 16", year: "2025", chip: "M5", ram: "48GB", storage: "512GB", size: "16\"", colour: "", isNew: false },
    { id: 25, model: "Dell Laptop", year: "", chip: "", ram: "", storage: "", size: "", colour: "", isNew: false },
    { id: 26, model: "MacBook Air", year: "2025", chip: "M4", ram: "", storage: "256GB", size: "13\"", colour: "", isNew: false },
    { id: 27, model: "MacBook Air", year: "2025", chip: "M4", ram: "16GB", storage: "512GB", size: "13\"", colour: "", isNew: false },
    { id: 28, model: "MacBook Air", year: "2025", chip: "M4", ram: "", storage: "512GB", size: "13\"", colour: "", isNew: false },
    { id: 29, model: "MacBook Pro", year: "2025", chip: "M4", ram: "", storage: "512GB", size: "14\"", colour: "", isNew: false }
];

let nextLaptopId = 30;

// Phone Data (5 tiers: S, A, B, C, D - non-USB-C phones must be B tier or below)
let phones = [
    { id: 1, model: "Pixel Fold 9", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Simon", date: "2024-01-01" }] },
    { id: 2, model: "Pixel 6a", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Naziha", date: "2022-01-01" }] },
    { id: 3, model: "Pixel Fold Pro 9", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Sameeha", date: "2024-01-01" }] },
    { id: 4, model: "iPhone 12", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Panos", date: "2020-01-01" }] },
    { id: 5, model: "Samsung Fold 5", storage: "", colour: "", tier: "A", isNew: false, ownerHistory: [{ owner: "Kiki", date: "2023-01-01" }] },
    { id: 6, model: "Samsung Fold 5", storage: "", colour: "", tier: "A", isNew: false, ownerHistory: [{ owner: "Tyrone", date: "2023-01-01" }] },
    { id: 7, model: "iPhone 14 Pro", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Faizan", date: "2022-01-01" }] },
    { id: 8, model: "iPhone 15", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Fatima A", date: "2023-01-01" }] },
    { id: 9, model: "iPhone 15 Pro Max", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Fatima H", date: "2023-01-01" }] },
    { id: 10, model: "iPhone 13 Pro", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Axel", date: "2021-01-01" }] },
    { id: 11, model: "Samsung Fold 7", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Omar", date: "2025-01-01" }] },
    { id: 12, model: "iPhone 15 Pro", storage: "", colour: "", tier: "A", isNew: false, ownerHistory: [{ owner: "Mikyas", date: "2023-01-01" }] },
    { id: 13, model: "iPhone 12", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Silmi", date: "2020-01-01" }] },
    { id: 14, model: "iPhone 13 Pro", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "William", date: "2021-01-01" }] },
    { id: 15, model: "Google Pixel 8a", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Celine", date: "2024-01-01" }] },
    { id: 16, model: "iPhone 15", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Dihya", date: "2023-01-01" }] },
    { id: 17, model: "iPhone XS Max", storage: "", colour: "", tier: "C", isNew: false, ownerHistory: [{ owner: "Zahid", date: "2018-01-01" }] },
    { id: 18, model: "iPhone 14", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Laila", date: "2022-01-01" }] },
    { id: 19, model: "iPhone 11", storage: "", colour: "", tier: "C", isNew: false, ownerHistory: [{ owner: "Aristotelis", date: "2019-01-01" }] },
    { id: 20, model: "iPhone 13", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Ali", date: "2021-01-01" }] },
    { id: 21, model: "iPhone 13", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Clara", date: "2021-01-01" }] },
    { id: 22, model: "iPhone 15", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Adam", date: "2023-01-01" }] },
    { id: 23, model: "iPhone 11", storage: "", colour: "", tier: "C", isNew: false, ownerHistory: [{ owner: "Assiya", date: "2019-01-01" }] },
    { id: 24, model: "iPhone 15 Pro Max", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Hamza", date: "2023-01-01" }] },
    { id: 25, model: "iPhone 17", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Maitham", date: "2025-01-01" }] },
    { id: 26, model: "Samsung Fold 7", storage: "", colour: "", tier: "S", isNew: true, ownerHistory: [] },
    { id: 27, model: "Samsung Fold 7", storage: "", colour: "", tier: "S", isNew: true, ownerHistory: [] },
    { id: 28, model: "Samsung Fold 7", storage: "", colour: "", tier: "S", isNew: true, ownerHistory: [] },
    { id: 29, model: "Samsung Fold 7", storage: "", colour: "", tier: "S", isNew: true, ownerHistory: [] },
    { id: 30, model: "Samsung Fold 7", storage: "", colour: "", tier: "S", isNew: true, ownerHistory: [] },
    { id: 31, model: "iPhone 17 Pro", storage: "512GB", colour: "Deep Blue", tier: "S", isNew: true, ownerHistory: [] },
    { id: 32, model: "iPhone 17", storage: "256GB", colour: "Black", tier: "S", isNew: true, ownerHistory: [] }
];
let nextPhoneId = 33;

// Assignments: person name -> laptop id (saved to localStorage)
let assignments = {};

// Phone Assignments: person name -> phone id (saved to localStorage)
let phoneAssignments = {
    "Simon": 1,
    "Naziha": 2,
    "Sameeha": 3,
    "Panos": 4,
    "Kiki": 5,
    "Tyrone": 6,
    "Faizan": 7,
    "Fatima A": 8,
    "Fatima H": 9,
    "Axel": 10,
    "Omar": 11,
    "Mikyas": 12,
    "Silmi": 13,
    "William": 14,
    "Celine": 15,
    "Dihya": 16,
    "Zahid": 17,
    "Laila": 18,
    "Aristotelis": 19,
    "Ali": 20,
    "Clara": 21,
    "Adam": 22,
    "Assiya": 23,
    "Hamza": 24,
    "Maitham": 25
};

// Locked assignments: person name -> boolean (true = locked, cannot change laptop)
let lockedAssignments = {};

// Locked phone assignments: person name -> boolean
let lockedPhoneAssignments = {};

// Second phone assignments: person name -> phone id (for people with two phones)
let secondPhoneAssignments = {};

// State
let pendingSwaps = {};
let pendingPhoneSwaps = {};
let draggedLaptop = null;
let draggedPhone = null;
let dragSource = null;
let phoneDragSource = null;
let swapPersonIndex = null;
let selectedSwapLaptop = null;
let swapSelectionMode = false;
let swapSourcePerson = null;

// Phone swap state
let phoneSwapPersonIndex = null;
let selectedSwapPhone = null;
let phoneSwapSelectionMode = false;
let phoneSwapSourcePerson = null;

// Undo history
let undoHistory = [];
const MAX_UNDO_STATES = 50;

function saveStateForUndo() {
    const state = {
        people: JSON.parse(JSON.stringify(people)),
        laptops: JSON.parse(JSON.stringify(laptops)),
        phones: JSON.parse(JSON.stringify(phones)),
        assignments: JSON.parse(JSON.stringify(assignments)),
        phoneAssignments: JSON.parse(JSON.stringify(phoneAssignments)),
        secondPhoneAssignments: JSON.parse(JSON.stringify(secondPhoneAssignments)),
        pendingSwaps: JSON.parse(JSON.stringify(pendingSwaps)),
        pendingPhoneSwaps: JSON.parse(JSON.stringify(pendingPhoneSwaps))
    };
    undoHistory.push(state);
    if (undoHistory.length > MAX_UNDO_STATES) {
        undoHistory.shift();
    }
}

function undo() {
    if (undoHistory.length === 0) return;
    const state = undoHistory.pop();
    people = state.people;
    laptops = state.laptops;
    phones = state.phones || [];
    assignments = state.assignments;
    phoneAssignments = state.phoneAssignments || {};
    secondPhoneAssignments = state.secondPhoneAssignments || {};
    pendingSwaps = state.pendingSwaps;
    pendingPhoneSwaps = state.pendingPhoneSwaps || {};
    renderAll();
}

// Listen for Cmd+Z / Ctrl+Z
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'z') {
        e.preventDefault();
        undo();
    }
});
let removePersonIndex = null;
let selectedRemoveAction = null;
let editingLaptopId = null;
let deletingLaptopId = null;
let selectedLaptops = new Set();
let editingPersonIndex = null;
let deletingPersonIndex = null;

// Phone state variables
let phoneRemovePersonIndex = null;
let selectedPhoneRemoveAction = null;
let editingPhoneId = null;
let deletingPhoneId = null;
let selectedPhones = new Set();
let editingPhoneOwnerHistory = [];

// LocalStorage functions
function resetData() {
    if (confirm('Are you sure you want to reset all data? This will restore the default laptops and assignments.')) {
        localStorage.removeItem('laptopManagerData');
        location.reload();
    }
}

function saveData() {
    // Sort people by tier before saving
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    people.sort((a, b) => (tierOrder[a.tier] || 4) - (tierOrder[b.tier] || 4));

    const data = {
        people: people,
        laptops: laptops,
        phones: phones,
        assignments: assignments,
        phoneAssignments: phoneAssignments,
        secondPhoneAssignments: secondPhoneAssignments,
        pendingSwaps: pendingSwaps,
        pendingPhoneSwaps: pendingPhoneSwaps,
        nextLaptopId: nextLaptopId,
        nextPhoneId: nextPhoneId,
        lockedAssignments: lockedAssignments,
        lockedPhoneAssignments: lockedPhoneAssignments
    };
    localStorage.setItem('laptopManagerData', JSON.stringify(data));

    // Auto-save to server (JSON file)
    fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }).catch(err => console.log('Server save skipped:', err.message));
}

// Export all data as JSON file for GitHub backup
function exportData() {
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    people.sort((a, b) => (tierOrder[a.tier] || 4) - (tierOrder[b.tier] || 4));

    const data = {
        exportDate: new Date().toISOString(),
        people: people,
        laptops: laptops,
        phones: phones,
        assignments: assignments,
        phoneAssignments: phoneAssignments,
        secondPhoneAssignments: secondPhoneAssignments,
        pendingSwaps: pendingSwaps,
        pendingPhoneSwaps: pendingPhoneSwaps,
        nextLaptopId: nextLaptopId,
        nextPhoneId: nextPhoneId,
        lockedAssignments: lockedAssignments,
        lockedPhoneAssignments: lockedPhoneAssignments
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'technology-manager-data.json';
    a.click();
    URL.revokeObjectURL(url);
}

// Toggle export menu
function toggleExportMenu() {
    const menu = document.getElementById('export-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function hideExportMenu() {
    document.getElementById('export-menu').style.display = 'none';
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.export-dropdown')) {
        hideExportMenu();
    }
});

// Export visual report as image
async function exportVisualReport(type) {
    const now = new Date();
    const fullFilename = `${type}-report-${now.toISOString().split('T')[0]}.png`;

    // Get the source page
    let pageId = type === 'laptops' ? 'page-assignments' : 'page-phone-assignments';
    let page = document.getElementById(pageId);

    if (!page) {
        alert('Could not find the page to export.');
        return;
    }

    // Temporarily modify the page for full capture
    const peopleGrid = page.querySelector('.people-grid');
    const inventoryPanel = page.querySelector('.inventory-panel');

    // Store original styles
    const originalGridStyle = peopleGrid ? peopleGrid.getAttribute('style') || '' : '';
    const originalInventoryStyle = inventoryPanel ? inventoryPanel.getAttribute('style') || '' : '';
    const originalInventoryContentStyle = inventoryPanel?.querySelector('.inventory-content')?.getAttribute('style') || '';

    // Temporarily expand the grid to show all content
    if (peopleGrid) {
        peopleGrid.style.marginRight = '0';
        peopleGrid.style.paddingBottom = '20px';
    }

    // Temporarily make inventory panel flow in document (not fixed)
    if (inventoryPanel) {
        inventoryPanel.style.position = 'relative';
        inventoryPanel.style.bottom = 'auto';
        inventoryPanel.style.left = 'auto';
        inventoryPanel.style.right = 'auto';
        inventoryPanel.style.width = '100%';
        inventoryPanel.style.maxWidth = 'none';
        inventoryPanel.style.marginTop = '20px';

        const inventoryContent = inventoryPanel.querySelector('.inventory-content');
        if (inventoryContent) {
            inventoryContent.style.maxHeight = 'none';
            inventoryContent.style.overflow = 'visible';
        }
    }

    // Hide interactive elements temporarily
    const hiddenElements = [];
    page.querySelectorAll('.btn-icon, .lock-checkbox-container').forEach(el => {
        hiddenElements.push({ el, display: el.style.display });
        el.style.display = 'none';
    });

    // Capture the page directly - use onclone to fix inset box-shadows (html2canvas can't render them)
    try {
        const canvas = await html2canvas(page, {
            scale: 2,
            useCORS: true,
            backgroundColor: '#f5f7fa',
            scrollX: 0,
            scrollY: 0,
            windowWidth: page.scrollWidth,
            windowHeight: page.scrollHeight,
            onclone: (clonedDoc) => {
                // html2canvas doesn't render inset box-shadows properly
                // Convert them to borders instead
                const pendingOutCards = clonedDoc.querySelectorAll('.laptop-card.pending-out');
                pendingOutCards.forEach(card => {
                    card.style.boxShadow = 'none';
                    card.style.border = '2px solid #f59e0b';
                });

                const pendingInCards = clonedDoc.querySelectorAll('.laptop-card.pending-in');
                pendingInCards.forEach(card => {
                    card.style.boxShadow = 'none';
                    card.style.border = '2px solid #10b981';
                });

                const pendingSoonCards = clonedDoc.querySelectorAll('.laptop-card.pending-soon');
                pendingSoonCards.forEach(card => {
                    card.style.boxShadow = 'none';
                    card.style.border = '2px solid #8b5cf6';
                });

                const pendingScheduledCards = clonedDoc.querySelectorAll('.laptop-card.pending-scheduled');
                pendingScheduledCards.forEach(card => {
                    card.style.boxShadow = 'none';
                    card.style.border = '2px solid #f97316';
                });

                const incomingCards = clonedDoc.querySelectorAll('.laptop-card.incoming-laptop');
                incomingCards.forEach(card => {
                    card.style.boxShadow = 'none';
                    card.style.border = '2px solid #3b82f6';
                });

                // Also handle brand-new glow effect
                const brandNewCards = clonedDoc.querySelectorAll('.laptop-card.brand-new');
                brandNewCards.forEach(card => {
                    card.style.boxShadow = '0 0 8px 2px rgba(212, 168, 83, 0.5)';
                });

                // Fix phone brand icons - html2canvas can't render CSS background-image SVGs
                // Replace with styled text instead
                clonedDoc.querySelectorAll('.phone-brand-icon.apple').forEach(icon => {
                    icon.style.backgroundImage = 'none';
                    icon.style.display = 'inline-flex';
                    icon.style.alignItems = 'center';
                    icon.style.justifyContent = 'center';
                    icon.style.fontSize = '10px';
                    icon.style.fontWeight = 'bold';
                    icon.style.color = '#555';
                    icon.textContent = 'A';
                });

                clonedDoc.querySelectorAll('.phone-brand-icon.samsung').forEach(icon => {
                    icon.style.backgroundImage = 'none';
                    icon.style.display = 'inline-flex';
                    icon.style.alignItems = 'center';
                    icon.style.justifyContent = 'center';
                    icon.style.fontSize = '10px';
                    icon.style.fontWeight = 'bold';
                    icon.style.color = 'white';
                    icon.textContent = 'S';
                });

                clonedDoc.querySelectorAll('.phone-brand-icon.google').forEach(icon => {
                    icon.style.backgroundImage = 'none';
                    icon.style.display = 'inline-flex';
                    icon.style.alignItems = 'center';
                    icon.style.justifyContent = 'center';
                    icon.style.fontSize = '10px';
                    icon.style.fontWeight = 'bold';
                    icon.style.color = '#4285F4';
                    icon.textContent = 'G';
                });

                // Fix lock icons - replace emoji with text
                clonedDoc.querySelectorAll('.lock-icon').forEach(icon => {
                    if (icon.textContent.includes('🔒')) {
                        icon.textContent = '[L]';
                        icon.style.color = '#10b981';
                        icon.style.fontWeight = 'bold';
                        icon.style.fontSize = '10px';
                    } else if (icon.textContent.includes('🔓')) {
                        icon.textContent = '[U]';
                        icon.style.color = '#9ca3af';
                        icon.style.fontWeight = 'bold';
                        icon.style.fontSize = '10px';
                    }
                });

                // Fix arrow symbols in pending badges - use simple text arrow
                clonedDoc.querySelectorAll('.pending-badge').forEach(badge => {
                    badge.textContent = badge.textContent.replace(/→/g, '->');
                });

                // Fix button symbols that html2canvas can't render
                clonedDoc.querySelectorAll('.btn-swap').forEach(btn => {
                    btn.textContent = '<>';
                });
                clonedDoc.querySelectorAll('.btn-remove').forEach(btn => {
                    if (btn.textContent.includes('🗑')) {
                        btn.textContent = 'X';
                    } else {
                        btn.textContent = 'x';
                    }
                });

                // Fix checkmark buttons
                clonedDoc.querySelectorAll('button').forEach(btn => {
                    if (btn.textContent === '✓') {
                        btn.textContent = 'OK';
                        btn.style.fontSize = '9px';
                        btn.style.fontWeight = 'bold';
                    }
                });

                // Fix uncertain indicator - use simple question mark with proper styling
                clonedDoc.querySelectorAll('.uncertain-indicator').forEach(ind => {
                    ind.textContent = '?';
                    ind.style.fontFamily = 'Arial, sans-serif';
                    ind.style.fontSize = '13px';
                    ind.style.fontWeight = 'bold';
                    ind.style.color = '#f59e0b';
                });

                // Fix tier badges - ensure text is visible
                clonedDoc.querySelectorAll('.tier-badge').forEach(badge => {
                    badge.style.fontFamily = 'Arial, sans-serif';
                });

                // Fix new badges
                clonedDoc.querySelectorAll('.new-badge').forEach(badge => {
                    badge.style.fontFamily = 'Arial, sans-serif';
                });
            }
        });

        const link = document.createElement('a');
        link.download = fullFilename;
        link.href = canvas.toDataURL('image/png');
        link.click();

        showExportNotification(fullFilename);
    } catch (error) {
        console.error('Error generating report:', error);
        alert('Error generating report. Please try again.');
    }

    // Restore original styles
    if (peopleGrid) {
        peopleGrid.setAttribute('style', originalGridStyle);
    }
    if (inventoryPanel) {
        inventoryPanel.setAttribute('style', originalInventoryStyle);
        const inventoryContent = inventoryPanel.querySelector('.inventory-content');
        if (inventoryContent) {
            inventoryContent.setAttribute('style', originalInventoryContentStyle);
        }
    }

    // Restore hidden elements
    hiddenElements.forEach(({ el, display }) => {
        el.style.display = display;
    });
}

// Export both laptops and phones as separate images
async function exportBothReports() {
    await exportVisualReport('laptops');
    // Small delay between downloads
    setTimeout(async () => {
        await exportVisualReport('phones');
    }, 500);
}

// Show notification about exported file
function showExportNotification(filename) {
    // Remove existing notification if any
    const existing = document.getElementById('export-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.id = 'export-notification';
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-size: 14px;
        max-width: 350px;
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 4px;">Export Complete</div>
        <div style="font-size: 12px; opacity: 0.9;">Saved to your Downloads folder as:<br><strong>${filename}</strong></div>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Import data from JSON file
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        try {
            const data = JSON.parse(e.target.result);

            if (data.people) people = data.people;
            if (data.laptops) laptops = data.laptops;
            if (data.phones) phones = data.phones;
            if (data.assignments) assignments = data.assignments;
            if (data.phoneAssignments) phoneAssignments = data.phoneAssignments;
            if (data.pendingSwaps) pendingSwaps = data.pendingSwaps;
            if (data.pendingPhoneSwaps) pendingPhoneSwaps = data.pendingPhoneSwaps;
            if (data.nextLaptopId) nextLaptopId = data.nextLaptopId;
            if (data.nextPhoneId) nextPhoneId = data.nextPhoneId;
            if (data.lockedAssignments) lockedAssignments = data.lockedAssignments;
            if (data.lockedPhoneAssignments) lockedPhoneAssignments = data.lockedPhoneAssignments;

            saveData();
            renderAll();
            alert('Data imported successfully!');
        } catch (err) {
            alert('Error importing data: ' + err.message);
        }
    };
    reader.readAsText(file);
    event.target.value = ''; // Reset file input
}

// Apply loaded data to global variables
function applyLoadedData(data) {
    if (data.people) people = data.people;
    if (data.laptops) laptops = data.laptops;

    // Migrate old index-based assignments to name-based
    if (data.assignments) {
        const keys = Object.keys(data.assignments);
        const isIndexBased = keys.length > 0 && keys.every(k => !isNaN(parseInt(k)));
        if (isIndexBased && data.people) {
            const newAssignments = {};
            keys.forEach(k => {
                const idx = parseInt(k);
                if (data.people[idx] && data.assignments[k]) {
                    newAssignments[data.people[idx].name] = data.assignments[k];
                }
            });
            assignments = newAssignments;
        } else {
            assignments = data.assignments;
        }
    }

    // Migrate old index-based pendingSwaps to name-based
    if (data.pendingSwaps) {
        const keys = Object.keys(data.pendingSwaps);
        const isIndexBased = keys.length > 0 && keys.every(k => !isNaN(parseInt(k)));
        if (isIndexBased && data.people) {
            const newSwaps = {};
            keys.forEach(k => {
                const idx = parseInt(k);
                if (data.people[idx] && data.pendingSwaps[k]) {
                    newSwaps[data.people[idx].name] = data.pendingSwaps[k];
                }
            });
            pendingSwaps = newSwaps;
        } else {
            pendingSwaps = data.pendingSwaps;
        }
    }
    if (data.nextLaptopId) nextLaptopId = data.nextLaptopId;
    if (data.lockedAssignments) lockedAssignments = data.lockedAssignments;

    // Load phone data
    if (data.phones && data.phones.length > 0) phones = data.phones;
    if (data.phoneAssignments && Object.keys(data.phoneAssignments).length > 0) phoneAssignments = data.phoneAssignments;
    if (data.secondPhoneAssignments) secondPhoneAssignments = data.secondPhoneAssignments;
    if (data.pendingPhoneSwaps) pendingPhoneSwaps = data.pendingPhoneSwaps;
    if (data.nextPhoneId && data.nextPhoneId > nextPhoneId) nextPhoneId = data.nextPhoneId;
    if (data.lockedPhoneAssignments) lockedPhoneAssignments = data.lockedPhoneAssignments;

    // Ensure all people have phoneTier
    people.forEach(p => {
        if (!p.phoneTier) p.phoneTier = 'B';
    });

    // Sort people by tier
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    people.sort((a, b) => (tierOrder[a.tier] || 4) - (tierOrder[b.tier] || 4));
}

async function loadData() {
    // Prefer the shared server so every device sees the same latest data
    try {
        const response = await fetch('/api/load', { cache: 'no-store' });
        if (response.ok) {
            const data = await response.json();
            if (data && !data.error) {
                applyLoadedData(data);
                localStorage.setItem('laptopManagerData', JSON.stringify(data));
                console.log('Loaded data from server');
                return true;
            }
        }
    } catch (e) {
        console.log('API not available, falling back to local cache');
    }

    // Offline fallback: localStorage cache from the last successful load
    const saved = localStorage.getItem('laptopManagerData');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            applyLoadedData(data);
            return true;
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }

    // Last-resort fallback: seed JSON shipped with the repo
    try {
        const response = await fetch('data/technology-manager-data.json');
        if (response.ok) {
            const data = await response.json();
            applyLoadedData(data);
            localStorage.setItem('laptopManagerData', JSON.stringify(data));
            console.log('Loaded data from JSON file');
            return true;
        }
    } catch (e) {
        console.log('No JSON data file found, using defaults');
    }

    return false;
}

// Refresh from the shared store when the tab regains focus so other devices' edits appear
let isRefreshingFromServer = false;
async function refreshFromServer() {
    if (isRefreshingFromServer) return;
    isRefreshingFromServer = true;
    try {
        const response = await fetch('/api/load', { cache: 'no-store' });
        if (!response.ok) return;
        const data = await response.json();
        if (!data || data.error) return;
        applyLoadedData(data);
        localStorage.setItem('laptopManagerData', JSON.stringify(data));
        if (typeof renderAll === 'function') renderAll();
    } catch (e) {
        // offline / network blip — ignore
    } finally {
        isRefreshingFromServer = false;
    }
}
window.addEventListener('focus', refreshFromServer);
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') refreshFromServer();
});

// One-time migration to update people names and add phone data
function migrateData() {
    const migrationKey = 'laptopManagerMigrationV12';
    if (localStorage.getItem(migrationKey)) return;

    // Name mapping from full names back to first names
    const nameMapping = {
        "Simon Barrow": "Simon",
        "Naziha Syed": "Naziha",
        "Sameeha Syed": "Sameeha",
        "Panos Koulloupas": "Panos",
        "Kiki Ajayi": "Kiki",
        "Tyrone Foye": "Tyrone",
        "Faizan Ijaz": "Faizan",
        "Fatima Ahmed": "Fatima A",
        "Fatima Habib": "Fatima H",
        "Axel Marinho": "Axel",
        "Omar Ahmed": "Omar",
        "Mikyas Iyob": "Mikyas",
        "Silmi Syed": "Silmi",
        "William Awomoyi": "William",
        "Celine Li": "Celine",
        "Dihya Hajee": "Dihya",
        "Zahid Ahmed": "Zahid",
        "Laila Lwanga": "Laila",
        "Aristotelis Pelekanos": "Aristotelis",
        "Ali Ajadi": "Ali",
        "Clara Bale": "Clara",
        "Adam Iyob": "Adam",
        "Assiya Larouci": "Assiya",
        "Hamza Arjomond Ahamed": "Hamza",
        "Maitham Mohammed": "Maitham",
        "Hussam Adonis Hayek": "Hussam"
    };

    // Update people names
    people.forEach(p => {
        if (nameMapping[p.name]) {
            const oldName = p.name;
            const newName = nameMapping[oldName];
            p.name = newName;
            // Update laptop assignments
            if (assignments[oldName] !== undefined) {
                assignments[newName] = assignments[oldName];
                delete assignments[oldName];
            }
            if (lockedAssignments[oldName] !== undefined) {
                lockedAssignments[newName] = lockedAssignments[oldName];
                delete lockedAssignments[oldName];
            }
            // Update pending swaps
            if (pendingSwaps[oldName] !== undefined) {
                pendingSwaps[newName] = pendingSwaps[oldName];
                delete pendingSwaps[oldName];
            }
            // Update phone assignments
            if (phoneAssignments[oldName] !== undefined) {
                phoneAssignments[newName] = phoneAssignments[oldName];
                delete phoneAssignments[oldName];
            }
        }
        if (!p.phoneTier) p.phoneTier = 'B';
    });

    // Set up default phones if none exist
    if (phones.length === 0) {
        phones = [
            { id: 1, model: "Pixel Fold 9", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Simon", date: "2024-01-01" }] },
            { id: 2, model: "Pixel 6a", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Naziha", date: "2022-01-01" }] },
            { id: 3, model: "Pixel Fold Pro 9", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Sameeha", date: "2024-01-01" }] },
            { id: 4, model: "iPhone 12", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Panos", date: "2020-01-01" }] },
            { id: 5, model: "Samsung Fold 5", storage: "", colour: "", tier: "A", isNew: false, ownerHistory: [{ owner: "Kiki", date: "2023-01-01" }] },
            { id: 6, model: "Samsung Fold 5", storage: "", colour: "", tier: "A", isNew: false, ownerHistory: [{ owner: "Tyrone", date: "2023-01-01" }] },
            { id: 7, model: "iPhone 14 Pro", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Faizan", date: "2022-01-01" }] },
            { id: 8, model: "iPhone 15", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Fatima A", date: "2023-01-01" }] },
            { id: 9, model: "iPhone 15 Pro Max", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Fatima H", date: "2023-01-01" }] },
            { id: 10, model: "iPhone 13 Pro", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Axel", date: "2021-01-01" }] },
            { id: 11, model: "Samsung Fold 7", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Omar", date: "2025-01-01" }] },
            { id: 12, model: "iPhone 15 Pro", storage: "", colour: "", tier: "A", isNew: false, ownerHistory: [{ owner: "Mikyas", date: "2023-01-01" }] },
            { id: 13, model: "iPhone 12", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Silmi", date: "2020-01-01" }] },
            { id: 14, model: "iPhone 13 Pro", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "William", date: "2021-01-01" }] },
            { id: 15, model: "Google Pixel 8a", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Celine", date: "2024-01-01" }] },
            { id: 16, model: "iPhone 15", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Dihya", date: "2023-01-01" }] },
            { id: 17, model: "iPhone XS Max", storage: "", colour: "", tier: "C", isNew: false, ownerHistory: [{ owner: "Zahid", date: "2018-01-01" }] },
            { id: 18, model: "iPhone 14", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Laila", date: "2022-01-01" }] },
            { id: 19, model: "iPhone 11", storage: "", colour: "", tier: "C", isNew: false, ownerHistory: [{ owner: "Aristotelis", date: "2019-01-01" }] },
            { id: 20, model: "iPhone 13", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Ali", date: "2021-01-01" }] },
            { id: 21, model: "iPhone 13", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Clara", date: "2021-01-01" }] },
            { id: 22, model: "iPhone 15", storage: "", colour: "", tier: "B", isNew: false, ownerHistory: [{ owner: "Adam", date: "2023-01-01" }] },
            { id: 23, model: "iPhone 11", storage: "", colour: "", tier: "C", isNew: false, ownerHistory: [{ owner: "Assiya", date: "2019-01-01" }] },
            { id: 24, model: "iPhone 15 Pro Max", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Hamza", date: "2023-01-01" }] },
            { id: 25, model: "iPhone 17", storage: "", colour: "", tier: "S", isNew: false, ownerHistory: [{ owner: "Maitham", date: "2025-01-01" }] }
        ];
        nextPhoneId = 26;
    }

    // Remove year from existing phones and add ownerHistory if missing
    phones.forEach(phone => {
        delete phone.year;
        if (!phone.ownerHistory) {
            // Find current owner from phoneAssignments
            const currentOwner = Object.keys(phoneAssignments).find(name => phoneAssignments[name] === phone.id);
            phone.ownerHistory = currentOwner ? [{ owner: currentOwner, date: "2024-01-01" }] : [];
        }
    });

    // Set up phone assignments if none exist
    if (Object.keys(phoneAssignments).length === 0) {
        phoneAssignments = {
            "Simon": 1,
            "Naziha": 2,
            "Sameeha": 3,
            "Panos": 4,
            "Kiki": 5,
            "Tyrone": 6,
            "Faizan": 7,
            "Fatima A": 8,
            "Fatima H": 9,
            "Axel": 10,
            "Omar": 11,
            "Mikyas": 12,
            "Silmi": 13,
            "William": 14,
            "Celine": 15,
            "Dihya": 16,
            "Zahid": 17,
            "Laila": 18,
            "Aristotelis": 19,
            "Ali": 20,
            "Clara": 21,
            "Adam": 22,
            "Assiya": 23,
            "Hamza": 24,
            "Maitham": 25
        };
    }

    // Sort people by laptop tier
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    people.sort((a, b) => (tierOrder[a.tier] || 4) - (tierOrder[b.tier] || 4));

    people.forEach(p => {
        // Removed D tier constraint for phones
    });

    // Apply phone tier constraints (non-USB-C phones must be B tier or below)
    phones.forEach(phone => {
        if (phone.tier === 'D') phone.tier = 'C';
        const model = (phone.model || '').toLowerCase();
        let hasUSBC = true;
        if (model.includes('iphone')) {
            const match = model.match(/iphone\s*(\d+)/i);
            if (match && parseInt(match[1]) < 15) hasUSBC = false;
            if (model.includes('xs') || model.includes('xr') || model.includes('x ')) hasUSBC = false;
        }
        if (!hasUSBC && (phone.tier === 'S' || phone.tier === 'A')) {
            phone.tier = 'B';
        }
    });

    localStorage.setItem(migrationKey, 'true');
    saveData();
}

// Auto-tier laptops based on specs
function autoTierLaptop(laptop) {
    let score = 0;
    const chip = (laptop.chip || '').toLowerCase();
    const ram = parseInt(laptop.ram) || 8;
    const year = parseInt(laptop.year) || 2020;

    // Chip scoring
    if (chip.includes('m5')) score += 60;
    else if (chip.includes('m4 max') || chip.includes('m4 pro')) score += 55;
    else if (chip.includes('m4') || chip.includes('m3 max')) score += 50;
    else if (chip.includes('m3 pro') || chip.includes('m2 max')) score += 40;
    else if (chip.includes('m3') || chip.includes('m2 pro')) score += 30;
    else if (chip.includes('m2') || chip.includes('m1 max')) score += 20;
    else if (chip.includes('m1 pro')) score += 15;
    else if (chip.includes('m1')) score += 10;
    else if (chip.includes('intel') || chip.includes('i5') || chip.includes('i7') || chip.includes('i9')) score += 5;

    // RAM scoring (highest weight)
    if (ram >= 64) score += 60;
    else if (ram >= 48) score += 55;
    else if (ram >= 36) score += 50;
    else if (ram >= 32) score += 45;
    else if (ram >= 24) score += 35;
    else if (ram >= 18) score += 25;
    else if (ram >= 16) score += 20;
    else if (ram >= 8) score += 10;

    // Year scoring
    if (year >= 2025) score += 25;
    else if (year >= 2024) score += 20;
    else if (year >= 2023) score += 15;
    else if (year >= 2022) score += 10;
    else if (year >= 2021) score += 5;
    else if (year >= 2020) score += 2;

    // Determine tier with strict rules:
    // S tier: M5 Pro, M5, or M4 Max chip, OR 30GB+ RAM. Must be 2024+
    // A tier: Must be 2024+ and M4 chip or higher
    // A/S tier: Must be Pro model OR have 24GB+ RAM
    // Below M4 cannot be A or S tier
    // 8GB RAM or less: maximum tier C

    const model = (laptop.model || '').toLowerCase();
    const isPro = model.includes('pro');
    const lowRam = ram <= 8;
    const hasMin24GB = ram >= 24;
    const highRam = ram >= 30;
    const is2024OrNewer = year >= 2024;

    // Check chip levels
    const isM5Pro = chip.includes('m5 pro');
    const isM5 = chip.includes('m5') && !chip.includes('m5 pro');
    const isM4Max = chip.includes('m4 max');
    const isM4Pro = chip.includes('m4 pro');
    const isM4 = chip.includes('m4') && !chip.includes('m4 max') && !chip.includes('m4 pro');
    const isM4OrHigher = chip.includes('m4') || chip.includes('m5');
    const isBelowM4 = !isM4OrHigher && (chip.includes('m3') || chip.includes('m2') || chip.includes('m1') || chip.includes('intel') || chip.includes('i5') || chip.includes('i7') || chip.includes('i9') || chip === '');

    // S tier chips (M4, M4 Max, M5, M5 Pro)
    const isSChip = isM5Pro || isM5 || isM4Max || isM4 || isM4Pro;

    // Must be Pro model OR 24GB+ RAM for A/S tier
    const canBeATierOrHigher = isPro || hasMin24GB;

    // 8GB or less RAM caps at tier C
    if (lowRam) {
        if (score >= 30) return 'C';
        return 'D';
    }

    // Not Pro and less than 24GB cannot be A or S tier
    if (!canBeATierOrHigher) {
        if (score >= 50) return 'B';
        if (score >= 30) return 'C';
        return 'D';
    }

    // S tier: S-tier chip (M4 Max, M5, M5 Pro) AND 30GB+ RAM AND 2024+
    if (isSChip && highRam && is2024OrNewer) {
        return 'S';
    }

    // Below M4 cannot be A or S tier
    if (isBelowM4) {
        if (score >= 50) return 'B';
        if (score >= 30) return 'C';
        return 'D';
    }

    // A tier: M4 or higher AND 2024+
    if (isM4OrHigher && is2024OrNewer) {
        return 'A';
    }

    // Everything else based on score
    if (score >= 50) return 'B';
    if (score >= 30) return 'C';
    return 'D';
}

function autoTierAllLaptops() {
    laptops.forEach(laptop => {
        laptop.tier = autoTierLaptop(laptop);
    });
}

// Check if phone has USB-C
function phoneHasUSBC(phone) {
    const model = (phone.model || '').toLowerCase();

    if (model.includes('iphone')) {
        // Extract iPhone number
        const match = model.match(/iphone\s*(\d+)/i);
        if (match) {
            const iphoneNum = parseInt(match[1]);
            if (iphoneNum < 15) {
                return false; // iPhone 14 and earlier have Lightning
            }
        }
        // iPhone X, XS, XR, etc. don't have USB-C
        if (model.includes('xs') || model.includes('xr') || model.includes('x ')) {
            return false;
        }
    }

    return true; // All Pixels and Samsung phones have USB-C
}

// Auto-determine phone tier based on model
function autoTierPhone(model) {
    const m = (model || '').toLowerCase();

    // S Tier - Top flagships
    if (m.includes('samsung fold 7') || m.includes('galaxy fold 7') ||
        m.includes('iphone 17') ||
        m.includes('iphone 16 pro max') || m.includes('iphone 15 pro max') ||
        m.includes('pixel fold 9') || m.includes('pixel fold pro')) {
        return 'S';
    }

    // A Tier - High-end flagships
    if (m.includes('samsung fold 6') || m.includes('galaxy fold 6') ||
        m.includes('samsung fold 5') || m.includes('galaxy fold 5') ||
        m.includes('iphone 16 pro') || m.includes('iphone 15 pro') ||
        m.includes('pixel 9 pro') || m.includes('pixel 8 pro')) {
        return 'A';
    }

    // B Tier - Standard phones (including non-USB-C phones)
    return 'B';
}

// Check if phone is older than iPhone 12 (released Oct 2020)
function isOldPhone(phone) {
    const model = (phone.model || '').toLowerCase();

    if (model.includes('iphone')) {
        // iPhone 11 and older (11, X, XS, XR, 8, 7, SE 1/2)
        const match = model.match(/iphone\s*(\d+)/i);
        if (match) {
            const iphoneNum = parseInt(match[1]);
            // iPhone 12 is the cutoff. Number < 12 is old.
            if (iphoneNum < 12) return true;
        }
        // Check for X, XS, XR specifically if they don't match the number regex (though X is just X)
        if (model.includes('iphone x') || model.includes('iphone se')) return true;
        // Note: iPhone SE 3rd gen (2022) is newer, but for simplicity assuming old SE defaults to D if not specified
    }
    // For other brands, we'd need date info. Assuming manual 'D' handles them or default B/C.
    return false;
}

// Check if phone is a new flagship (Post-iPhone 15, released Sept 2023)
function isNewFlagship(phone) {
    const model = (phone.model || '').toLowerCase();

    if (model.includes('iphone')) {
        const match = model.match(/iphone\s*(\d+)/i);
        if (match) {
            const num = parseInt(match[1]);
            if (num > 15) return true; // iPhone 15, 16, etc.
        }
    }
    // Pixel: >= 9 (Pixel 9, 10, Fold 2?)
    if (model.includes('pixel')) {
        const match = model.match(/pixel\s*(\d+)/i);
        if (match && parseInt(match[1]) >= 9) return true;
        if (model.includes('pixel fold 2') || model.includes('pixel fold 3')) return true;
    }
    // Samsung Galaxy S: >= 24 (S24, S25, etc.)
    if (model.includes('galaxy s') || model.includes('samsung s')) {
        const match = model.match(/s(\d+)/i);
        if (match && parseInt(match[1]) >= 24) return true;
    }
    // Samsung Fold: >= 6 (Fold 6, Fold 7, etc.)
    if (model.includes('fold')) {
        const match = model.match(/fold\s*(\d+)/i);
        if (match && parseInt(match[1]) >= 6) return true;
    }

    return false;
}

// Enforce phone tier constraint
function enforcePhoneTierConstraint(phone) {
    // 0. S-Tier Auto-Promotion: Strictly New Flagships (Post-iPhone 15)
    if (isNewFlagship(phone)) {
        if (phone.tier !== 'S') console.log(`Enforcing S-Tier Rule on ${phone.model}: ${phone.tier} -> S`);
        phone.tier = 'S';
        return; // Strict override
    }

    // 0.5 S-Tier Exclusivity: If it's SET to S but NOT a new flagship, downgrade to A.
    // "any phone that is two generations old can not be in s tier"
    if (phone.tier === 'S' && !isNewFlagship(phone)) {
        console.log(`Demoting ${phone.model} from S to A (S-Tier Exclusivity).`);
        phone.tier = 'A';
        // Continue to other checks (e.g. USB-C might downgrade it further to C)
    }

    // 1. Age Constraint: Phones older than iPhone 12 must be Category D
    if (isOldPhone(phone)) {
        if (phone.tier !== 'D') console.log(`Enforcing Age Constraint on ${phone.model}: ${phone.tier} -> D`);
        phone.tier = 'D';
        return; // Strict override
    }

    // 2. USB-C Constraint: Non-USB-C phones must be C or D (Category C or below)
    if (!phoneHasUSBC(phone)) {
        // If tier is S, A, or B -> force to C
        if (['S', 'A', 'B'].includes(phone.tier)) {
            if (phone.tier !== 'C') console.log(`Enforcing USB-C Constraint on ${phone.model}: ${phone.tier} -> C`);
            phone.tier = 'C';
        }
    }
}

function autoTierAllPhones() {
    phones.forEach(phone => {
        // Determine automatic tier from model
        const autoTier = autoTierPhone(phone.model);

        // If phone is manually set to D, keep it (unless autoTier says it's S or A, but we'll trust manual D for legacy)
        // Actually, just don't overwrite D with B
        if (phone.tier === 'D') {
            // Keep D
        } else {
            phone.tier = autoTier;
        }

        // Then enforce constraints (USB-C rule)
        enforcePhoneTierConstraint(phone);
    });
}

// Initialize default assignments (runs once if no saved data)
function initializeAssignments() {
    // Only initialize if assignments are empty
    if (Object.keys(assignments).length > 0) return;

    const defaultAssignments = {
        "Simon": 1,
        "Naziha": 2,
        "Sameeha": 3,
        "Panos": 4,
        "Kiki": 5,
        "Tyrone": 6,
        "Faizan": 7,
        "Fatima A": 8,
        // Fatima H has no laptop
        "Axel": 9,
        "Omar": 10,
        "Mikyas": 11,
        "Silmi": 12,
        "William": 13,
        "Celine": 14,
        // Dihya removed - laptop 15 stays in inventory
        "Zahid": 16,
        "Laila": 17,
        "Aristotelis": 18,
        "Ali": 19,
        "Clara": 20,
        "Adam": 21,
        "Assiya": 22,
        "Hamza": 23,
        "Maitham": 24,
        "Hussam": 25
    };

    // Only assign if person exists in people list
    Object.keys(defaultAssignments).forEach(name => {
        if (people.find(p => p.name === name)) {
            assignments[name] = defaultAssignments[name];
        }
    });
}

// Initialize
async function init() {
    const loaded = await loadData();
    migrateData(); // Run migration to update names and add phones

    // Always sort people by laptop tier (S, A, B, C, D)
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    people.sort((a, b) => (tierOrder[a.tier] || 4) - (tierOrder[b.tier] || 4));

    // Auto-tier all phones based on USB-C and model
    autoTierAllPhones();

    // Add Fivos if not exists
    if (!people.find(p => p.name === 'Fivos')) {
        people.push({ name: 'Fivos', tier: 'B', phoneTier: 'B', phonePreference: 'samsung' });
    }

    // Set phone preferences (one-time)
    const phonePrefsKey = 'phonePrefsSetV1';
    if (!localStorage.getItem(phonePrefsKey)) {
        const prefs = {
            'Sameeha': 'samsung',
            'Faizan': 'samsung',
            'Ali': 'iphone',
            'Panos': 'samsung',
            'Celine': 'samsung',
            'Aristotelis': 'samsung',
            'Clara': 'iphone',
            'Zahid': 'iphone',
            'William': 'iphone',
            'Fivos': 'samsung'
        };
        people.forEach(p => {
            if (prefs[p.name]) {
                p.phonePreference = prefs[p.name];
            }
        });
        localStorage.setItem(phonePrefsKey, 'true');
        saveData();
    }

    // Add new phones if they don't exist (one-time addition)
    const newPhonesKey = 'phonesAddedV1';
    if (!localStorage.getItem(newPhonesKey)) {
        // 5x Samsung Fold 7
        for (let i = 0; i < 5; i++) {
            phones.push({
                id: nextPhoneId++,
                model: "Samsung Fold 7",
                storage: "",
                colour: "",
                tier: "S",
                status: "available",
                isNew: true,
                ownerHistory: []
            });
        }
        // 1x iPhone 17 Pro 512GB Deep Blue
        phones.push({
            id: nextPhoneId++,
            model: "iPhone 17 Pro",
            storage: "512GB",
            colour: "Deep Blue",
            tier: "S",
            status: "available",
            isNew: true,
            ownerHistory: []
        });
        // 1x iPhone 17 256GB Black
        phones.push({
            id: nextPhoneId++,
            model: "iPhone 17",
            storage: "256GB",
            colour: "Black",
            tier: "S",
            status: "available",
            isNew: true,
            ownerHistory: []
        });
        localStorage.setItem(newPhonesKey, 'true');
        saveData();
    }

    if (!loaded || Object.keys(assignments).length === 0) {
        initializeAssignments();
        saveData();
    }

    // Add incoming laptops (one-time addition)
    const newLaptopsKey = 'laptopsAddedV1';
    if (!localStorage.getItem(newLaptopsKey)) {
        const mbpM5 = laptops.find(l => l.model === "MacBook Pro" && l.chip === "M5" && l.ram === "32GB" && l.colour === "Space Black");
        if (!mbpM5) {
            laptops.push({
                id: nextLaptopId++,
                model: "MacBook Pro",
                year: "2025",
                chip: "M5",
                ram: "32GB",
                storage: "1TB",
                size: "14\"",
                colour: "Space Black",
                isNew: false,
                status: "incoming"
            });
        }

        const mbaBlue = laptops.find(l => l.model === "MacBook Air" && l.chip === "M4" && l.ram === "24GB" && l.colour === "Sky Blue");
        if (!mbaBlue) {
            laptops.push({
                id: nextLaptopId++,
                model: "MacBook Air",
                year: "2025",
                chip: "M4",
                ram: "24GB",
                storage: "512GB",
                size: "13\"",
                colour: "Sky Blue",
                isNew: false,
                status: "incoming"
            });
        }

        const mbaMidnight = laptops.find(l => l.model === "MacBook Air" && l.chip === "M4" && l.ram === "32GB" && l.colour === "Midnight");
        if (!mbaMidnight) {
            laptops.push({
                id: nextLaptopId++,
                model: "MacBook Air",
                year: "2025",
                chip: "M4",
                ram: "32GB",
                storage: "512GB",
                size: "13\"",
                colour: "Midnight",
                isNew: false,
                status: "incoming"
            });
        }

        const mbpSilver = laptops.find(l => l.model === "MacBook Pro" && l.chip === "M5" && l.ram === "32GB" && l.colour === "Silver");
        if (!mbpSilver) {
            laptops.push({
                id: nextLaptopId++,
                model: "MacBook Pro",
                year: "2025",
                chip: "M5",
                ram: "32GB",
                storage: "1TB",
                size: "14\"",
                colour: "Silver",
                isNew: false,
                status: "incoming"
            });
        }

        const mbpM5_16gb = laptops.find(l => l.model === "MacBook Pro" && l.chip === "M5" && l.ram === "16GB" && l.storage === "1TB");
        if (!mbpM5_16gb) {
            laptops.push({
                id: nextLaptopId++,
                model: "MacBook Pro",
                year: "2025",
                chip: "M5",
                ram: "16GB",
                storage: "1TB",
                size: "14\"",
                colour: "",
                isNew: true,
                status: "available"
            });
        }

        localStorage.setItem(newLaptopsKey, 'true');
        saveData();
    }

    // Initialize owner history for assigned laptops that don't have any
    Object.keys(assignments).forEach(personName => {
        const laptopId = assignments[personName];
        if (laptopId) {
            const laptop = getLaptopById(laptopId);
            if (laptop && (!laptop.ownerHistory || laptop.ownerHistory.length === 0)) {
                laptop.ownerHistory = [{
                    owner: personName,
                    date: 'Initial'
                }];
            }
        }
    });

    autoTierAllLaptops();
    setupNavigation();
    renderAll();

    // Restore the last viewed page, or default to assignments
    const savedPage = localStorage.getItem('currentPage') || 'assignments';
    switchToPage(savedPage);
}

// Navigation
function setupNavigation() {
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const page = tab.dataset.page;
            switchToPage(page);
        });
    });
}

// Switch to a specific page
function switchToPage(page) {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    const tab = document.querySelector(`.nav-tab[data-page="${page}"]`);
    if (tab) tab.classList.add('active');
    document.getElementById(`page-${page}`).classList.add('active');

    // Hide all stats by default
    document.getElementById('header-stats').style.display = 'none';
    document.getElementById('header-stats-phones').style.display = 'none';
    document.body.classList.remove('assignments-view');

    if (page === 'assignments') {
        document.body.classList.add('assignments-view');
        document.getElementById('header-stats').style.display = 'flex';
    } else if (page === 'phone-assignments') {
        document.body.classList.add('assignments-view');
        document.getElementById('header-stats-phones').style.display = 'flex';
    } else if (page === 'manage-devices') {
        renderLaptopsTable();
        renderPhonesTable();
    } else if (page === 'people') {
        renderPeopleTable();
    }

    // Save current page to localStorage
    localStorage.setItem('currentPage', page);
}

// Switch between Laptops and Phones tabs on Manage Devices page
function switchDeviceTab(device) {
    document.querySelectorAll('.device-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.device-section').forEach(s => s.classList.remove('active'));

    document.querySelector(`.device-tab[data-device="${device}"]`).classList.add('active');
    document.getElementById(`device-section-${device}`).classList.add('active');

    if (device === 'laptops') {
        renderLaptopsTable();
    } else if (device === 'phones') {
        renderPhonesTable();
    }
}

// Get laptop by ID
function getLaptopById(id) {
    return laptops.find(l => l.id === id);
}

// Get assigned laptop IDs
function getAssignedLaptopIds() {
    return Object.values(assignments).filter(id => id !== null);
}

// Get laptop status
function getLaptopStatus(laptopId) {
    const assigned = getAssignedLaptopIds();
    const pendingIn = Object.values(pendingSwaps).map(s => s.newLaptopId);
    const pendingOut = Object.values(pendingSwaps).map(s => s.currentLaptopId);

    if (pendingIn.includes(laptopId) || pendingOut.includes(laptopId)) {
        return 'pending';
    }
    if (assigned.includes(laptopId)) {
        return 'assigned';
    }
    return 'available';
}

// Get who has laptop
function getAssignedPerson(laptopId) {
    const personName = Object.keys(assignments).find(k => assignments[k] === laptopId);
    return personName || null;
}

// Get pending outgoing laptops
function getPendingOutgoing() {
    return Object.values(pendingSwaps).map(swap => getLaptopById(swap.currentLaptopId)).filter(Boolean);
}

// Get pending incoming laptops
function getPendingIncoming() {
    return Object.values(pendingSwaps).map(swap => getLaptopById(swap.newLaptopId)).filter(Boolean);
}

// Get available laptops
function getAvailableLaptops() {
    const assigned = getAssignedLaptopIds();
    const pendingIn = Object.values(pendingSwaps).map(s => s.newLaptopId);
    return laptops.filter(l => !assigned.includes(l.id) && !pendingIn.includes(l.id));
}

// Mark incoming laptop as arrived (becomes available and brand new)
function markAsArrived(laptopId) {
    const laptop = getLaptopById(laptopId);
    if (laptop) {
        laptop.status = 'available';
        laptop.isNew = true;
        saveData();
        renderAll();
    }
}

// Log ownership change for a laptop
function logOwnershipChange(laptopId, newOwner) {
    const laptop = getLaptopById(laptopId);
    if (!laptop) return;

    if (!laptop.ownerHistory) {
        laptop.ownerHistory = [];
    }

    const today = new Date().toISOString().split('T')[0];
    laptop.ownerHistory.push({
        owner: newOwner, // person name or null for inventory
        date: today
    });
}

// Create laptop card
function createLaptopCard(laptop, options = {}) {
    const { showRemove = false, showSwap = false, showDelete = false, pendingType = null, inModal = false, scheduledFor = null, isIncoming = false, ownerName = null } = options;

    const div = document.createElement('div');
    div.dataset.laptopId = laptop.id;
    div.dataset.ownerName = ownerName || '';
    div.className = 'laptop-card';
    if (laptop.tier) div.classList.add(`tier-${laptop.tier}`);
    if (pendingType === 'out') div.classList.add('pending-out');
    if (pendingType === 'in') div.classList.add('pending-in');
    if (pendingType === 'soon') div.classList.add('pending-soon');
    if (pendingType === 'scheduled') div.classList.add('pending-scheduled');
    if (laptop.isNew) div.classList.add('brand-new');
    div.draggable = !inModal && (!pendingType || pendingType === 'soon' || pendingType === 'scheduled');
    div.dataset.laptopId = laptop.id;

    let badgeHtml = '';
    if (pendingType === 'out') {
        // Swap out: show tier and brand-new badge, but not "Old" swap badge
        if (laptop.tier) badgeHtml += `<span class="tier-badge tier-${laptop.tier}">${laptop.tier}</span>`;
        if (laptop.isNew) badgeHtml += '<span class="new-badge">New</span>';
        // Show where this laptop is going if scheduled for someone
        if (scheduledFor) {
            badgeHtml += `<span class="pending-badge out">→ ${scheduledFor}</span>`;
        }
    }
    else if (pendingType === 'in') {
        // Swap in: show tier and brand-new badge, but not "New" swap badge
        if (laptop.tier) badgeHtml += `<span class="tier-badge tier-${laptop.tier}">${laptop.tier}</span>`;
        if (laptop.isNew) badgeHtml += '<span class="new-badge">New</span>';
    }
    else if (pendingType === 'soon') badgeHtml = ''; // No badge, section title explains
    else if (pendingType === 'scheduled') badgeHtml = `<span class="pending-badge scheduled">→ ${scheduledFor}</span>`;
    else {
        if (laptop.tier) badgeHtml += `<span class="tier-badge tier-${laptop.tier}">${laptop.tier}</span>`;
        // Show brand-new badge only in inventory (no owner), not when assigned
        if (laptop.isNew && !ownerName) badgeHtml += '<span class="new-badge">New</span>';
    }

    let actionsHtml = '';
    if (showSwap || showRemove || showDelete) {
        actionsHtml = '<div class="laptop-actions">';
        if (showSwap) actionsHtml += `<button class="btn-icon btn-swap" title="Schedule swap">↔</button>`;
        if (showRemove) actionsHtml += `<button class="btn-icon btn-remove" title="Remove">×</button>`;
        if (showDelete) actionsHtml += `<button class="btn-icon btn-remove" title="Delete" data-delete="${laptop.id}">🗑</button>`;
        actionsHtml += '</div>';
    }

    div.innerHTML = `
                <div class="laptop-header">
                    <span class="laptop-model">${laptop.model} ${badgeHtml}</span>
                    ${actionsHtml}
                </div>
                <div class="laptop-specs">
                    <div class="spec"><span class="spec-label">Year:</span><span class="spec-value">${laptop.year || '-'}</span></div>
                    <div class="spec"><span class="spec-label">Chip:</span><span class="spec-value">${laptop.chip || '-'}</span></div>
                    <div class="spec"><span class="spec-label">Size:</span><span class="spec-value">${laptop.size || '-'}</span></div>
                    <div class="spec"><span class="spec-label">RAM:</span><span class="spec-value">${laptop.ram || '-'}</span></div>
                    <div class="spec"><span class="spec-label">Storage:</span><span class="spec-value">${laptop.storage || '-'}</span></div>
                    <div class="spec"><span class="spec-label">Colour:</span><span class="spec-value">${laptop.colour || '-'}</span></div>
                </div>
            `;

    if (!inModal) {
        div.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            openEditLaptopModal(laptop.id);
        });
    }

    if (!inModal && (!pendingType || pendingType === 'soon' || pendingType === 'scheduled')) {
        div.addEventListener('dragstart', (e) => {
            const personName = Object.keys(assignments).find(k => assignments[k] === laptop.id);
            // Prevent dragging from locked persons
            if (personName && lockedAssignments[personName]) {
                e.preventDefault();
                return;
            }
            draggedLaptop = laptop.id;
            dragSource = personName || 'inventory';
            div.classList.add('dragging');
        });

        div.addEventListener('dragend', () => {
            div.classList.remove('dragging');
            draggedLaptop = null;
            dragSource = null;
        });
    }

    // Add delete button listener
    const deleteBtn = div.querySelector('[data-delete]');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openDeleteModal(laptop.id);
        });
    }

    // Add swap selection click handler
    if (swapSelectionMode && ownerName !== swapSourcePerson) {
        div.classList.add('swap-selectable');
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            selectLaptopForSwap(laptop.id, ownerName);
        });
    }

    return div;
}

// Render people grid
function renderPeopleGrid() {
    const grid = document.getElementById('people-grid');
    grid.innerHTML = '';

    // Ensure all people have a tier, then sort by tier (S, A, B, C, D)
    people.forEach(p => { if (!p.tier) p.tier = 'B'; });
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    people.sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]);

    // Group people by tier
    const tiers = ['S', 'A', 'B', 'C', 'D'];
    tiers.forEach(tier => {
        let tierPeople = people.filter(p => p.tier === tier);
        if (tierPeople.length === 0) return;

        // Sort so locked people appear last (rightmost)
        tierPeople.sort((a, b) => {
            const aLocked = lockedAssignments[a.name] === true ? 1 : 0;
            const bLocked = lockedAssignments[b.name] === true ? 1 : 0;
            return aLocked - bLocked;
        });

        // Create tier row container
        const tierRow = document.createElement('div');
        tierRow.className = 'tier-row';
        tierRow.style.cssText = 'display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; width: 100%;';

        tierPeople.forEach(person => {
            const index = people.indexOf(person);
            const card = document.createElement('div');
            const isLocked = lockedAssignments[person.name] === true;
            card.className = 'person-card' + (isLocked ? ' locked' : '');
            card.dataset.personName = person.name;

            const hasPendingSwap = pendingSwaps[person.name] !== undefined;
            const laptopId = assignments[person.name];
            const laptop = laptopId ? getLaptopById(laptopId) : null;

            card.innerHTML = `<div class="person-header tier-${person.tier}"><span class="person-name">${person.name}</span><label class="lock-checkbox-container" title="Lock this assignment"><input type="checkbox" class="lock-checkbox" ${isLocked ? 'checked' : ''} /><span class="lock-icon">${isLocked ? '🔒' : '🔓'}</span></label><span class="tier-badge tier-${person.tier}" data-person-name="${person.name}" style="cursor:pointer;" title="Click to change tier">${person.tier}</span></div>`;

            // Add lock checkbox handler
            card.querySelector('.lock-checkbox').addEventListener('change', (e) => {
                e.stopPropagation();
                lockedAssignments[person.name] = e.target.checked;
                saveData();
                renderAll();
            });

            // Add tier click handler
            card.querySelector('.tier-badge').addEventListener('click', (e) => {
                e.stopPropagation();
                showTierSelector(person.name, e.target);
            });

            const slot = document.createElement('div');
            slot.className = 'laptop-slot';

            // Calculate if this person's laptop is scheduled for someone else
            let scheduledRecipient = null;
            if (laptopId) {
                Object.keys(pendingSwaps).forEach(recipient => {
                    if (pendingSwaps[recipient].newLaptopId === laptopId) {
                        scheduledRecipient = recipient;
                    }
                });
            }

            if (laptop) {
                const pendingType = hasPendingSwap ? 'out' : (scheduledRecipient ? 'scheduled' : null);
                const laptopCard = createLaptopCard(laptop, {
                    showRemove: !hasPendingSwap && !scheduledRecipient,
                    showSwap: !hasPendingSwap && !scheduledRecipient,
                    pendingType,
                    ownerName: person.name,
                    scheduledFor: scheduledRecipient
                });

                laptopCard.querySelector('.btn-swap')?.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openSwapModal(person.name);
                });

                laptopCard.querySelector('.btn-remove')?.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openRemoveModal(person.name);
                });

                slot.appendChild(laptopCard);

                if (hasPendingSwap) {
                    const newLaptop = getLaptopById(pendingSwaps[person.name].newLaptopId);
                    if (newLaptop) {
                        const incomingCard = createLaptopCard(newLaptop, { pendingType: 'in' });

                        // Add "On the Way" badge if laptop is incoming
                        if (newLaptop.status === 'incoming') {
                            const modelSpan = incomingCard.querySelector('.laptop-model');
                            modelSpan.innerHTML += ' <span class="incoming-badge">On the Way</span>';
                        }

                        // Complete swap button
                        const completeBtn = document.createElement('button');
                        completeBtn.className = 'btn-icon btn-edit';
                        completeBtn.title = 'Complete swap';
                        completeBtn.innerHTML = '✓';
                        completeBtn.style.color = '#10b981';
                        completeBtn.style.borderColor = '#6ee7b7';
                        completeBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            saveStateForUndo();
                            // Complete the swap: assign new laptop, old one goes to inventory
                            const oldLaptopId = assignments[person.name];
                            const newLaptopId = pendingSwaps[person.name].newLaptopId;

                            // Log old laptop returning to inventory
                            if (oldLaptopId) {
                                logOwnershipChange(oldLaptopId, null);
                            }
                            // Log new laptop going to person
                            logOwnershipChange(newLaptopId, person.name);

                            assignments[person.name] = newLaptopId;
                            delete pendingSwaps[person.name];
                            renderAll();
                        });
                        incomingCard.querySelector('.laptop-header').appendChild(completeBtn);

                        // Cancel swap button
                        const cancelBtn = document.createElement('button');
                        cancelBtn.className = 'btn-icon btn-remove';
                        cancelBtn.title = 'Cancel swap';
                        cancelBtn.innerHTML = '×';
                        cancelBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            saveStateForUndo();
                            delete pendingSwaps[person.name];
                            renderAll();
                        });
                        incomingCard.querySelector('.laptop-header').appendChild(cancelBtn);

                        slot.appendChild(incomingCard);
                    }
                }
            } else {
                slot.innerHTML = '<div class="empty-slot">Drop laptop here</div>';
            }

            card.appendChild(slot);

            // Add secured banner overlay to person card if locked
            if (isLocked) {
                const banner = document.createElement('div');
                banner.className = 'secured-banner tier-' + person.tier;
                banner.innerHTML = '<span>Secured</span>';
                card.appendChild(banner);
            }

            card.addEventListener('dragover', (e) => {
                // Don't allow drop on locked persons
                if (isLocked) return;
                e.preventDefault();
                card.classList.add('drag-over');
            });

            card.addEventListener('dragleave', () => {
                card.classList.remove('drag-over');
            });

            card.addEventListener('drop', (e) => {
                e.preventDefault();
                card.classList.remove('drag-over');

                // Don't allow drop on locked persons
                if (isLocked) return;

                // Don't allow dragging from a locked person
                if (dragSource !== 'inventory' && lockedAssignments[dragSource]) return;

                if (draggedLaptop && !pendingSwaps[person.name]) {
                    saveStateForUndo();
                    if (dragSource !== 'inventory') {
                        // Log the dragged laptop leaving its previous owner
                        logOwnershipChange(draggedLaptop, null);
                        assignments[dragSource] = null;
                    }
                    // Log the laptop going to new owner
                    logOwnershipChange(draggedLaptop, person.name);
                    assignments[person.name] = draggedLaptop;
                    renderAll();
                }
            });

            tierRow.appendChild(card);
        });

        grid.appendChild(tierRow);
    });

}

// Sort laptops by tier (S highest, D lowest)
function sortLaptopsByTier(laptopList) {
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    return [...laptopList].sort((a, b) => {
        const tierA = tierOrder[a.tier] !== undefined ? tierOrder[a.tier] : 5;
        const tierB = tierOrder[b.tier] !== undefined ? tierOrder[b.tier] : 5;
        return tierA - tierB;
    });
}

// Render inventory
function renderInventory() {
    const content = document.getElementById('inventory-grid');

    const available = sortLaptopsByTier(getAvailableLaptops().filter(l => l.status !== 'incoming'));
    const onTheWay = sortLaptopsByTier(laptops.filter(l => l.status === 'incoming'));
    const soonAvailable = getPendingOutgoing(); // laptops returning from people - soon available

    content.innerHTML = '';

    if (available.length === 0 && soonAvailable.length === 0 && onTheWay.length === 0) {
        content.innerHTML = '<div class="empty-message">No laptops in inventory</div>';
        return;
    }

    // Available section (first)
    if (available.length > 0) {
        const availableSection = document.createElement('div');
        availableSection.className = 'inventory-section';
        availableSection.innerHTML = '<div class="inventory-section-title">Available</div>';

        const availableGrid = document.createElement('div');
        availableGrid.className = 'inventory-grid';

        available.forEach(laptop => {
            availableGrid.appendChild(createLaptopCard(laptop, { showDelete: true, ownerName: null }));
        });

        availableSection.appendChild(availableGrid);
        content.appendChild(availableSection);
    }

    // Soon Available section (laptops returning to inventory)
    if (soonAvailable.length > 0) {
        // Check which laptops are already scheduled to go to someone else
        const scheduledFor = {};
        Object.keys(pendingSwaps).forEach(personName => {
            const swap = pendingSwaps[personName];
            scheduledFor[swap.newLaptopId] = personName;
        });

        // Split into "going to inventory" and "going to someone"
        const toInventory = sortLaptopsByTier(soonAvailable.filter(l => !scheduledFor[l.id]));
        const toSomeone = sortLaptopsByTier(soonAvailable.filter(l => scheduledFor[l.id]));

        // Soon Available - going to inventory
        if (toInventory.length > 0) {
            const soonSection = document.createElement('div');
            soonSection.className = 'inventory-section';
            soonSection.innerHTML = '<div class="inventory-section-title">Returning to Inventory</div>';

            const soonGrid = document.createElement('div');
            soonGrid.className = 'inventory-grid';

            toInventory.forEach(laptop => {
                const card = createLaptopCard(laptop, { pendingType: 'soon', ownerName: null });
                card.draggable = true;
                card.addEventListener('dragstart', (e) => {
                    draggedLaptop = laptop.id;
                    dragSource = 'inventory';
                    card.classList.add('dragging');
                });
                card.addEventListener('dragend', () => {
                    card.classList.remove('dragging');
                    draggedLaptop = null;
                    dragSource = null;
                });
                soonGrid.appendChild(card);
            });

            soonSection.appendChild(soonGrid);
            content.appendChild(soonSection);
        }

        // Going to Someone section
        if (toSomeone.length > 0) {
            const goingSection = document.createElement('div');
            goingSection.className = 'inventory-section';
            goingSection.innerHTML = '<div class="inventory-section-title">Going to Someone</div>';

            const goingGrid = document.createElement('div');
            goingGrid.className = 'inventory-grid';

            toSomeone.forEach(laptop => {
                const card = createLaptopCard(laptop, { pendingType: 'soon', ownerName: null });
                const header = card.querySelector('.laptop-header');
                const modelSpan = header.querySelector('.laptop-model');
                modelSpan.innerHTML += ` <span class="pending-badge scheduled">→ ${scheduledFor[laptop.id]}</span>`;
                goingGrid.appendChild(card);
            });

            goingSection.appendChild(goingGrid);
            content.appendChild(goingSection);
        }

    }

    // On the Way section (last)
    if (onTheWay.length > 0) {
        const onTheWaySection = document.createElement('div');
        onTheWaySection.className = 'inventory-section';
        onTheWaySection.innerHTML = '<div class="inventory-section-title">On the Way</div>';

        const onTheWayGrid = document.createElement('div');
        onTheWayGrid.className = 'inventory-grid';

        // Check which laptops are scheduled for someone
        const scheduledForIncoming = {};
        Object.keys(pendingSwaps).forEach(personName => {
            const swap = pendingSwaps[personName];
            scheduledForIncoming[swap.newLaptopId] = personName;
        });

        onTheWay.forEach(laptop => {
            const card = createLaptopCard(laptop, { isIncoming: true, ownerName: null });
            card.classList.add('incoming-laptop');

            const header = card.querySelector('.laptop-header');
            const modelSpan = header.querySelector('.laptop-model');

            // Show "Assigned to [Name]" if scheduled, no badge otherwise (section title is enough)
            if (scheduledForIncoming[laptop.id]) {
                modelSpan.innerHTML += ` <span class="pending-badge scheduled">→ ${scheduledForIncoming[laptop.id]}</span>`;
            }

            // Add Arrived button
            const arrivedBtn = document.createElement('button');
            arrivedBtn.className = 'btn-icon btn-edit';
            arrivedBtn.title = 'Mark as Arrived';
            arrivedBtn.innerHTML = '✓';
            arrivedBtn.style.color = '#10b981';
            arrivedBtn.style.borderColor = '#6ee7b7';
            arrivedBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                markAsArrived(laptop.id);
            });
            header.appendChild(arrivedBtn);

            // Add Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn-icon btn-remove';
            deleteBtn.title = 'Delete';
            deleteBtn.innerHTML = '🗑';
            deleteBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openDeleteModal(laptop.id);
            });
            header.appendChild(deleteBtn);

            card.draggable = true;
            card.addEventListener('dragstart', (e) => {
                draggedLaptop = laptop.id;
                dragSource = 'inventory';
                card.classList.add('dragging');
            });
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
                draggedLaptop = null;
                dragSource = null;
            });
            onTheWayGrid.appendChild(card);
        });

        onTheWaySection.appendChild(onTheWayGrid);
        content.appendChild(onTheWaySection);
    }
}

// Render laptops table
function renderLaptopsTable() {
    const tbody = document.getElementById('laptops-table-body');
    const searchTerm = document.getElementById('laptop-search')?.value.toLowerCase() || '';

    const filtered = laptops.filter(l => {
        const searchStr = `${l.model} ${l.chip} ${l.colour} ${l.ram} ${l.storage} ${l.year}`.toLowerCase();
        return searchStr.includes(searchTerm);
    });

    tbody.innerHTML = filtered.map(laptop => {
        const status = getLaptopStatus(laptop.id);
        const assignedTo = getAssignedPerson(laptop.id);

        let statusBadge = '';
        if (status === 'available') {
            statusBadge = '<span class="status-badge available">Available</span>';
        } else if (status === 'assigned') {
            statusBadge = `<span class="status-badge assigned">Assigned</span>`;
        } else {
            statusBadge = '<span class="status-badge pending">Pending</span>';
        }

        const newBadge = laptop.isNew ? '<span class="new-badge">New</span>' : '';
        const canDelete = status === 'available';
        const isSelected = selectedLaptops.has(laptop.id);

        const tierBadge = laptop.tier ? `<span class="tier-badge tier-${laptop.tier}">${laptop.tier}</span>` : '-';

        return `
                    <tr class="tier-${laptop.tier || 'C'}">
                        <td><input type="checkbox" ${isSelected ? 'checked' : ''} onchange="toggleLaptopSelection(${laptop.id})"></td>
                        <td>${laptop.model}${newBadge}</td>
                        <td>${tierBadge}</td>
                        <td>${laptop.year || '-'}</td>
                        <td>${laptop.chip || '-'}</td>
                        <td>${laptop.size || '-'}</td>
                        <td>${laptop.ram || '-'}</td>
                        <td>${laptop.storage || '-'}</td>
                        <td>${laptop.colour || '-'}</td>
                        <td>${statusBadge}${assignedTo ? `<br><span style="font-size:11px;color:#6b7280;">${assignedTo}</span>` : ''}</td>
                        <td>
                            <div class="table-actions">
                                <button class="btn-icon btn-edit" title="Edit" onclick="openEditLaptopModal(${laptop.id})">✎</button>
                                <button class="btn-icon btn-remove" title="Delete" onclick="openDeleteModal(${laptop.id})" ${!canDelete ? 'disabled style="opacity:0.3;cursor:not-allowed;"' : ''}>🗑</button>
                            </div>
                        </td>
                    </tr>
                `;
    }).join('');

    updateBulkActionsVisibility();
}

// Update stats
function updateStats() {
    const assigned = getAssignedLaptopIds().length;
    const available = getAvailableLaptops().length;
    const pending = Object.keys(pendingSwaps).length;

    document.getElementById('assigned-count').textContent = assigned;
    document.getElementById('available-count').textContent = available;
    document.getElementById('pending-count').textContent = pending;
}

// Setup inventory drop zone
function setupInventoryDropZone() {
    const panel = document.getElementById('inventory-panel');

    panel.addEventListener('dragover', (e) => {
        if (dragSource !== 'inventory') {
            e.preventDefault();
        }
    });

    panel.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedLaptop && dragSource !== 'inventory') {
            saveStateForUndo();
            // Log laptop returning to inventory
            logOwnershipChange(draggedLaptop, null);
            assignments[dragSource] = null;
            renderAll();
        }
    });
}

// Quick tier selector
function showTierSelector(personName, targetElement) {
    // Remove any existing selector
    const existing = document.querySelector('.tier-selector');
    if (existing) existing.remove();

    const selector = document.createElement('div');
    selector.className = 'tier-selector';

    const tiers = ['S', 'A', 'B', 'C', 'D'];
    tiers.forEach(tier => {
        const btn = document.createElement('button');
        btn.className = `tier-option tier-${tier}`;
        btn.textContent = tier;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const person = people.find(p => p.name === personName);
            if (person) {
                saveStateForUndo();
                person.tier = tier;
            }
            selector.remove();
            renderAll();
        });
        selector.appendChild(btn);
    });

    // Position near the clicked element
    const rect = targetElement.getBoundingClientRect();
    selector.style.left = rect.left + 'px';
    selector.style.top = (rect.bottom + 5) + 'px';

    document.body.appendChild(selector);

    // Close when clicking outside
    const closeHandler = (e) => {
        if (!selector.contains(e.target)) {
            selector.remove();
            document.removeEventListener('click', closeHandler);
        }
    };
    setTimeout(() => document.addEventListener('click', closeHandler), 0);
}

// Swap selection mode
function startSwapSelection(personName) {
    // Don't allow swap on locked persons
    if (lockedAssignments[personName]) return;
    swapSelectionMode = true;
    swapSourcePerson = personName;
    document.body.classList.add('swap-selection-mode');

    // Show instruction banner
    let banner = document.getElementById('swap-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'swap-banner';
        banner.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; background: #3b82f6; color: white; padding: 12px; text-align: center; z-index: 1000; font-weight: 500;';
        document.body.appendChild(banner);
    }
    banner.innerHTML = `Select a laptop to swap with <strong>${personName}</strong>'s laptop <button onclick="cancelSwapSelection()" style="margin-left: 16px; padding: 4px 12px; background: white; color: #3b82f6; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>`;
    banner.style.display = 'block';

    renderAll();
}

function cancelSwapSelection() {
    swapSelectionMode = false;
    swapSourcePerson = null;
    document.body.classList.remove('swap-selection-mode');
    const banner = document.getElementById('swap-banner');
    if (banner) banner.style.display = 'none';
    renderAll();
}

function selectLaptopForSwap(laptopId, ownerName) {
    if (!swapSelectionMode || !swapSourcePerson) return;

    const sourceLaptopId = assignments[swapSourcePerson];

    // Can't swap with yourself
    if (ownerName === swapSourcePerson) {
        cancelSwapSelection();
        return;
    }

    saveStateForUndo();

    // If selecting another person's laptop, schedule mutual swap
    if (ownerName && ownerName !== swapSourcePerson) {
        // Schedule swap for source person (gets the selected laptop)
        pendingSwaps[swapSourcePerson] = {
            currentLaptopId: sourceLaptopId,
            newLaptopId: laptopId
        };
        // Schedule swap for other person (gets source person's laptop)
        pendingSwaps[ownerName] = {
            currentLaptopId: laptopId,
            newLaptopId: sourceLaptopId
        };
    } else {
        // Selecting from inventory - just schedule for source person
        pendingSwaps[swapSourcePerson] = {
            currentLaptopId: sourceLaptopId,
            newLaptopId: laptopId
        };
    }

    cancelSwapSelection();
}

// Keep old modal function for compatibility but redirect to new mode
function openSwapModal(personName) {
    // Don't allow swap on locked persons
    if (lockedAssignments[personName]) return;
    startSwapSelection(personName);
    return;

    // Old modal code below (kept for reference)
    swapPersonIndex = personName;
    selectedSwapLaptop = null;

    document.getElementById('swap-person-name').textContent = personName;

    const modalLaptops = document.getElementById('modal-laptops');
    const available = getAvailableLaptops().filter(l => l.status !== 'incoming');
    const onTheWay = laptops.filter(l => l.status === 'incoming');
    const soonAvailable = getPendingOutgoing(); // laptops returning - soon available

    modalLaptops.innerHTML = '';

    const allSwappable = [...available, ...onTheWay, ...soonAvailable];

    if (allSwappable.length === 0) {
        modalLaptops.innerHTML = '<div class="empty-message">No laptops available</div>';
    } else {
        allSwappable.forEach(laptop => {
            const card = document.createElement('div');
            card.className = 'modal-laptop';
            card.dataset.laptopId = laptop.id;
            card.appendChild(createLaptopCard(laptop, { inModal: true }));

            card.addEventListener('click', () => {
                document.querySelectorAll('.modal-laptop').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                selectedSwapLaptop = laptop.id;
                document.getElementById('confirm-swap-btn').disabled = false;
            });

            modalLaptops.appendChild(card);
        });
    }

    document.getElementById('confirm-swap-btn').disabled = true;
    document.getElementById('swap-modal').classList.add('active');
}

function closeSwapModal() {
    document.getElementById('swap-modal').classList.remove('active');
    swapPersonIndex = null;
    selectedSwapLaptop = null;
}

function confirmSwap() {
    if (swapPersonIndex && selectedSwapLaptop) {
        // If this laptop was scheduled for someone else, cancel that swap
        Object.keys(pendingSwaps).forEach(key => {
            if (pendingSwaps[key].newLaptopId === selectedSwapLaptop) {
                delete pendingSwaps[key];
            }
        });

        pendingSwaps[swapPersonIndex] = {
            currentLaptopId: assignments[swapPersonIndex],
            newLaptopId: selectedSwapLaptop
        };
        closeSwapModal();
        renderAll();
    }
}

// Remove modal
function openRemoveModal(personName) {
    // Don't allow remove on locked persons
    if (lockedAssignments[personName]) return;
    removePersonIndex = personName;
    selectedRemoveAction = null;
    document.querySelectorAll('.remove-option').forEach(o => o.classList.remove('selected'));
    document.getElementById('confirm-remove-btn').disabled = true;
    document.getElementById('remove-modal').classList.add('active');
}

function closeRemoveModal() {
    document.getElementById('remove-modal').classList.remove('active');
    removePersonIndex = null;
    selectedRemoveAction = null;
}

function selectRemoveOption(action) {
    selectedRemoveAction = action;
    document.querySelectorAll('.remove-option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`.remove-option[data-action="${action}"]`).classList.add('selected');
    document.getElementById('confirm-remove-btn').disabled = false;
}

function confirmRemove() {
    if (removePersonIndex && selectedRemoveAction) {
        saveStateForUndo();
        const laptopId = assignments[removePersonIndex];

        // Log laptop returning to inventory
        if (selectedRemoveAction === 'inventory' && laptopId) {
            logOwnershipChange(laptopId, null);
        }

        delete assignments[removePersonIndex];

        if (selectedRemoveAction === 'bin') {
            laptops = laptops.filter(l => l.id !== laptopId);
        }

        closeRemoveModal();
        renderAll();
    }
}

// Add/Edit Laptop Modal
function openAddLaptopModal() {
    editingLaptopId = null;
    document.getElementById('laptop-modal-title').textContent = 'Add New Laptop';
    document.getElementById('laptop-modal-desc').textContent = 'Enter the laptop specifications below';
    document.getElementById('laptop-submit-btn').textContent = 'Add Laptop';
    document.getElementById('laptop-form').reset();
    document.getElementById('laptop-new').checked = true; // Default to brand new for new laptops
    document.getElementById('owner-history-section').style.display = 'block';
    renderOwnerHistoryEditor([]);
    document.getElementById('laptop-modal').classList.add('active');
}

function openEditLaptopModal(laptopId) {
    editingLaptopId = laptopId;
    const laptop = getLaptopById(laptopId);
    if (!laptop) return;

    document.getElementById('laptop-modal-title').textContent = 'Edit Laptop';
    document.getElementById('laptop-modal-desc').textContent = 'Update the laptop specifications';
    document.getElementById('laptop-submit-btn').textContent = 'Save Changes';

    document.getElementById('laptop-model').value = laptop.model;
    document.getElementById('laptop-chip').value = laptop.chip;
    document.getElementById('laptop-size').value = laptop.size;
    document.getElementById('laptop-ram').value = laptop.ram;
    document.getElementById('laptop-storage').value = laptop.storage;
    document.getElementById('laptop-colour').value = laptop.colour;
    document.getElementById('laptop-year').value = laptop.year || '';
    document.getElementById('laptop-tier').value = 'auto';
    document.getElementById('laptop-status').value = laptop.status || 'available';
    document.getElementById('laptop-new').checked = laptop.isNew || false;

    // Check if laptop is scheduled to go to someone
    let scheduledTo = null;
    Object.keys(pendingSwaps).forEach(personName => {
        if (pendingSwaps[personName].newLaptopId === laptopId) {
            scheduledTo = personName;
        }
    });

    // Show owner history (always show section when editing)
    const historySection = document.getElementById('owner-history-section');
    historySection.style.display = 'block';
    renderOwnerHistoryEditor(laptop.ownerHistory || [], scheduledTo);

    document.getElementById('laptop-modal').classList.add('active');
}

// Temporary storage for editing history
let editingOwnerHistory = [];

function renderOwnerHistoryEditor(history, scheduledTo = null) {
    editingOwnerHistory = JSON.parse(JSON.stringify(history || [])); // Deep copy
    const historyList = document.getElementById('owner-history-list');

    let html = '';

    // Show scheduled move at the top if applicable
    if (scheduledTo) {
        html += `<div style="padding: 6px 8px; background: #dbeafe; border-radius: 4px; margin-bottom: 8px; color: #1d4ed8; font-weight: 500;">
                    <span style="color: #6b7280; font-weight: normal;">Scheduled:</span> → ${scheduledTo}
                </div>`;
    }

    if (editingOwnerHistory.length === 0 && !scheduledTo) {
        historyList.innerHTML = '<div style="color: #9ca3af; font-style: italic;">No history yet</div>';
        return;
    }

    html += editingOwnerHistory.map((entry, i) => {
        const ownerValue = entry.owner || '';
        return `
                    <div style="display: flex; gap: 8px; align-items: center; padding: 6px 0; ${i > 0 ? 'border-top: 1px solid #e5e7eb;' : ''}">
                        <input type="text" value="${entry.date}" onchange="updateHistoryEntry(${i}, 'date', this.value)" style="width: 80px; padding: 4px 6px; font-size: 11px; border: 1px solid #d1d5db; border-radius: 4px;">
                        <input type="text" value="${ownerValue}" placeholder="Inventory" onchange="updateHistoryEntry(${i}, 'owner', this.value)" style="flex: 1; padding: 4px 6px; font-size: 11px; border: 1px solid #d1d5db; border-radius: 4px;">
                        <button type="button" onclick="removeHistoryEntry(${i})" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 14px; padding: 2px 6px;">×</button>
                    </div>
                `;
    }).join('');

    historyList.innerHTML = html;
}

function addHistoryEntry() {
    const today = new Date().toISOString().split('T')[0];
    editingOwnerHistory.push({ date: today, owner: '' });
    renderOwnerHistoryEditor(editingOwnerHistory);
}

function updateHistoryEntry(index, field, value) {
    if (editingOwnerHistory[index]) {
        editingOwnerHistory[index][field] = value || (field === 'owner' ? null : value);
    }
}

function removeHistoryEntry(index) {
    editingOwnerHistory.splice(index, 1);
    renderOwnerHistoryEditor(editingOwnerHistory);
}

function closeLaptopModal() {
    document.getElementById('laptop-modal').classList.remove('active');
    editingLaptopId = null;
    editingOwnerHistory = [];
}

function saveLaptop(e) {
    e.preventDefault();
    saveStateForUndo();

    const laptopData = {
        model: document.getElementById('laptop-model').value,
        chip: document.getElementById('laptop-chip').value,
        size: document.getElementById('laptop-size').value,
        ram: document.getElementById('laptop-ram').value,
        storage: document.getElementById('laptop-storage').value,
        colour: document.getElementById('laptop-colour').value,
        year: document.getElementById('laptop-year').value,
        tier: document.getElementById('laptop-tier').value,
        status: document.getElementById('laptop-status').value,
        isNew: document.getElementById('laptop-new').checked
    };

    // Auto-tier if set to auto, or always when editing
    if (!laptopData.tier || laptopData.tier === 'auto' || editingLaptopId) {
        laptopData.tier = autoTierLaptop(laptopData);
    }

    if (editingLaptopId) {
        const index = laptops.findIndex(l => l.id === editingLaptopId);
        if (index !== -1) {
            laptops[index] = { ...laptops[index], ...laptopData };
            // Save edited owner history
            laptops[index].ownerHistory = editingOwnerHistory.map(entry => ({
                date: entry.date,
                owner: entry.owner || null
            }));
        }
    } else {
        laptops.push({
            id: nextLaptopId++,
            ...laptopData,
            ownerHistory: editingOwnerHistory.map(entry => ({
                date: entry.date,
                owner: entry.owner || null
            }))
        });
    }

    closeLaptopModal();
    renderAll();
}

// Delete Modal
function openDeleteModal(laptopId) {
    deletingLaptopId = laptopId;
    const laptop = getLaptopById(laptopId);
    if (!laptop) return;

    document.getElementById('delete-laptop-info').innerHTML = `
                <strong>${laptop.model}</strong><br>
                <span style="font-size:12px;color:#6b7280;">
                    ${laptop.year ? laptop.year + ' • ' : ''}${laptop.chip} • ${laptop.size} • ${laptop.ram} RAM • ${laptop.storage} • ${laptop.colour}
                </span>
            `;
    document.getElementById('delete-modal').classList.add('active');
}

function closeDeleteModal() {
    document.getElementById('delete-modal').classList.remove('active');
    deletingLaptopId = null;
}

function confirmDeleteLaptop() {
    if (deletingLaptopId) {
        saveStateForUndo();
        laptops = laptops.filter(l => l.id !== deletingLaptopId);
        Object.keys(pendingSwaps).forEach(personName => {
            if (pendingSwaps[personName].newLaptopId === deletingLaptopId) {
                delete pendingSwaps[personName];
            }
        });
        closeDeleteModal();
        renderAll();
    }
}

// Selection functions
function toggleLaptopSelection(laptopId) {
    if (selectedLaptops.has(laptopId)) {
        selectedLaptops.delete(laptopId);
    } else {
        selectedLaptops.add(laptopId);
    }
    updateBulkActionsVisibility();
    updateSelectAllCheckbox();
}

function toggleSelectAll() {
    const selectAllCheckbox = document.getElementById('select-all');
    const searchTerm = document.getElementById('laptop-search')?.value.toLowerCase() || '';

    const filtered = laptops.filter(l => {
        const searchStr = `${l.model} ${l.chip} ${l.colour} ${l.ram} ${l.storage} ${l.year}`.toLowerCase();
        return searchStr.includes(searchTerm);
    });

    if (selectAllCheckbox.checked) {
        filtered.forEach(l => selectedLaptops.add(l.id));
    } else {
        filtered.forEach(l => selectedLaptops.delete(l.id));
    }
    renderLaptopsTable();
}

function updateSelectAllCheckbox() {
    const selectAllCheckbox = document.getElementById('select-all');
    const searchTerm = document.getElementById('laptop-search')?.value.toLowerCase() || '';

    const filtered = laptops.filter(l => {
        const searchStr = `${l.model} ${l.chip} ${l.colour} ${l.ram} ${l.storage} ${l.year}`.toLowerCase();
        return searchStr.includes(searchTerm);
    });

    const allSelected = filtered.length > 0 && filtered.every(l => selectedLaptops.has(l.id));
    selectAllCheckbox.checked = allSelected;
}

function updateBulkActionsVisibility() {
    const bulkActions = document.getElementById('bulk-actions');
    const selectedCount = document.getElementById('selected-count');

    if (selectedLaptops.size > 0) {
        bulkActions.classList.add('visible');
        selectedCount.textContent = selectedLaptops.size;
    } else {
        bulkActions.classList.remove('visible');
    }
}

function clearSelection() {
    selectedLaptops.clear();
    document.getElementById('select-all').checked = false;
    renderLaptopsTable();
}

// Bulk Edit Modal
function openBulkEditModal() {
    if (selectedLaptops.size === 0) return;

    document.getElementById('bulk-edit-count').textContent = selectedLaptops.size;
    document.getElementById('bulk-edit-form').reset();
    document.getElementById('bulk-edit-modal').classList.add('active');
}

function closeBulkEditModal() {
    document.getElementById('bulk-edit-modal').classList.remove('active');
}

function saveBulkEdit(e) {
    e.preventDefault();

    const updates = {};

    const model = document.getElementById('bulk-model').value;
    const chip = document.getElementById('bulk-chip').value;
    const size = document.getElementById('bulk-size').value;
    const ram = document.getElementById('bulk-ram').value;
    const storage = document.getElementById('bulk-storage').value;
    const colour = document.getElementById('bulk-colour').value;
    const year = document.getElementById('bulk-year').value;
    const tier = document.getElementById('bulk-tier').value;
    const isNewValue = document.getElementById('bulk-new').value;

    if (model) updates.model = model;
    if (chip) updates.chip = chip;
    if (size) updates.size = size;
    if (ram) updates.ram = ram;
    if (storage) updates.storage = storage;
    if (colour) updates.colour = colour;
    if (year) updates.year = year;
    if (tier) updates.tier = tier;
    if (isNewValue !== '') updates.isNew = isNewValue === 'true';

    laptops = laptops.map(laptop => {
        if (selectedLaptops.has(laptop.id)) {
            return { ...laptop, ...updates };
        }
        return laptop;
    });

    closeBulkEditModal();
    clearSelection();
    renderAll();
}

// People Management Functions
function renderPeopleTable() {
    const tbody = document.getElementById('people-table-body');
    const searchTerm = document.getElementById('people-search')?.value.toLowerCase() || '';

    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4, 's': 0, 'a': 1, 'b': 2, 'c': 3, 'd': 4 };
    const filtered = people.map((person, index) => ({ person, index }))
        .filter(p => p.person.name.toLowerCase().includes(searchTerm))
        .sort((a, b) => {
            const tierA = tierOrder[a.person.tier] !== undefined ? tierOrder[a.person.tier] : 4;
            const tierB = tierOrder[b.person.tier] !== undefined ? tierOrder[b.person.tier] : 4;
            return tierA - tierB;
        });

    tbody.innerHTML = filtered.map(({ person, index }) => {
        const phoneTier = person.phoneTier || 'B';
        const laptopTier = person.tier || 'B';
        const escapedName = person.name.replace(/'/g, "\\'");

        return `
                    <tr style="cursor: pointer;" onclick="openEditPersonModalByName('${escapedName}')">
                        <td><span class="tier-badge tier-${laptopTier}">${laptopTier}</span></td>
                        <td style="text-align: center;"><strong>${person.name}</strong></td>
                        <td><span class="tier-badge tier-${phoneTier}">${phoneTier}</span></td>
                    </tr>
                `;
    }).join('');
}

function openAddPersonModal() {
    editingPersonIndex = null;
    document.getElementById('person-modal-title').textContent = 'Add New Person';
    document.getElementById('person-modal-desc').textContent = 'Enter the person\'s name below';
    document.getElementById('person-submit-btn').textContent = 'Add Person';
    document.getElementById('person-delete-btn').style.display = 'none';
    document.getElementById('person-form').reset();
    document.getElementById('person-modal').classList.add('active');
}

function openEditPersonModalByName(name) {
    const index = people.findIndex(p => p.name === name);
    if (index === -1) return;
    openEditPersonModal(index);
}

function openEditPersonModal(index) {
    editingPersonIndex = index;
    const person = people[index];
    if (!person) return;

    document.getElementById('person-modal-title').textContent = 'Edit Person';
    document.getElementById('person-modal-desc').textContent = 'Update the person\'s details';
    document.getElementById('person-submit-btn').textContent = 'Save Changes';
    document.getElementById('person-delete-btn').style.display = 'block';
    document.getElementById('person-name').value = person.name;
    document.getElementById('person-tier').value = person.tier || 'B';
    document.getElementById('person-phone-tier').value = person.phoneTier || 'B';
    document.getElementById('person-phone-preference').value = person.phonePreference || '';
    document.getElementById('person-modal').classList.add('active');
}

function deletePersonFromModal() {
    if (editingPersonIndex !== null) {
        const indexToDelete = editingPersonIndex;
        closePersonModal();
        openDeletePersonModal(indexToDelete);
    }
}

function closePersonModal() {
    document.getElementById('person-modal').classList.remove('active');
    editingPersonIndex = null;
}

function savePerson(e) {
    e.preventDefault();
    saveStateForUndo();

    const name = document.getElementById('person-name').value.trim();
    const tier = document.getElementById('person-tier').value;
    const phoneTier = document.getElementById('person-phone-tier').value;
    const phonePreference = document.getElementById('person-phone-preference').value;
    if (!name) return;

    if (editingPersonIndex !== null) {
        people[editingPersonIndex] = { name, tier, phoneTier, phonePreference };
    } else {
        people.push({ name, tier, phoneTier, phonePreference });
    }

    closePersonModal();
    renderAll();
}

function openDeletePersonModal(index) {
    deletingPersonIndex = index;
    const person = people[index];
    if (!person) return;

    const laptopId = assignments[person.name];
    const laptop = laptopId ? getLaptopById(laptopId) : null;
    const phoneId = phoneAssignments[person.name];
    const phone = phoneId ? getPhoneById(phoneId) : null;

    document.getElementById('delete-person-info').innerHTML = `<strong>${person.name}</strong> <span class="tier-badge tier-${person.tier}">${person.tier}</span>`;

    const warningEl = document.getElementById('delete-person-warning');
    if (laptop || phone) {
        warningEl.style.display = 'block';
        let warnings = [];
        if (laptop) warnings.push(`laptop (${laptop.model})`);
        if (phone) warnings.push(`phone (${phone.model})`);
        warningEl.innerHTML = `This person has an assigned ${warnings.join(' and ')}. The device(s) will be returned to inventory.`;
    } else {
        warningEl.style.display = 'none';
    }

    document.getElementById('delete-person-modal').classList.add('active');
}

function closeDeletePersonModal() {
    document.getElementById('delete-person-modal').classList.remove('active');
    deletingPersonIndex = null;
}

function confirmDeletePerson() {
    if (deletingPersonIndex === null) return;
    saveStateForUndo();

    const personName = people[deletingPersonIndex].name;

    // Remove any pending swaps for this person (laptop and phone)
    delete pendingSwaps[personName];
    delete pendingPhoneSwaps[personName];

    // Remove the assignments (laptop and phone go back to inventory)
    delete assignments[personName];
    delete phoneAssignments[personName];

    // Remove the person
    people.splice(deletingPersonIndex, 1);

    closeDeletePersonModal();
    renderAll();
}

// ========================================
// PHONE FUNCTIONS
// ========================================

// Get phone by ID
function getPhoneById(id) {
    return phones.find(p => p.id === id);
}

// Get assigned phone IDs
function getAssignedPhoneIds() {
    return Object.values(phoneAssignments).filter(id => id !== null);
}

// Get phone status
function getPhoneStatus(phoneId) {
    const assigned = getAssignedPhoneIds();
    const pendingIn = Object.values(pendingPhoneSwaps).map(s => s.newPhoneId);
    const pendingOut = Object.values(pendingPhoneSwaps).map(s => s.currentPhoneId);

    if (pendingIn.includes(phoneId) || pendingOut.includes(phoneId)) {
        return 'pending';
    }
    if (assigned.includes(phoneId)) {
        return 'assigned';
    }
    return 'available';
}

// Get who has phone
function getPhoneAssignedPerson(phoneId) {
    const personName = Object.keys(phoneAssignments).find(k => phoneAssignments[k] === phoneId);
    return personName || null;
}

// Get pending outgoing phones
function getPendingOutgoingPhones() {
    return Object.values(pendingPhoneSwaps).map(swap => getPhoneById(swap.currentPhoneId)).filter(Boolean);
}

// Get pending incoming phones
function getPendingIncomingPhones() {
    return Object.values(pendingPhoneSwaps).map(swap => getPhoneById(swap.newPhoneId)).filter(Boolean);
}

// Get available phones
function getAvailablePhones() {
    const assigned = getAssignedPhoneIds();
    const pendingIn = Object.values(pendingPhoneSwaps).map(s => s.newPhoneId);
    return phones.filter(p => !assigned.includes(p.id) && !pendingIn.includes(p.id));
}

// Mark incoming phone as arrived
function markPhoneAsArrived(phoneId) {
    const phone = getPhoneById(phoneId);
    if (phone) {
        phone.status = 'available';
        phone.isNew = true;
        saveData();
        renderAll();
    }
}

// Log phone ownership change
function logPhoneOwnershipChange(phoneId, newOwner) {
    const phone = getPhoneById(phoneId);
    if (!phone) return;

    if (!phone.ownerHistory) {
        phone.ownerHistory = [];
    }

    const today = new Date().toISOString().split('T')[0];
    phone.ownerHistory.push({
        owner: newOwner,
        date: today
    });
}

// Sort phones by tier
function sortPhonesByTier(phoneList) {
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    return [...phoneList].sort((a, b) => {
        const tierA = tierOrder[a.tier] !== undefined ? tierOrder[a.tier] : 5;
        const tierB = tierOrder[b.tier] !== undefined ? tierOrder[b.tier] : 5;
        return tierA - tierB;
    });
}

// Helper to get brand icon for phone model
function getPhoneBrandIcon(model) {
    const modelLower = (model || '').toLowerCase();
    if (modelLower.includes('iphone')) {
        return '<span class="phone-brand-icon apple" title="Apple iPhone"></span>';
    } else if (modelLower.includes('samsung') || modelLower.includes('galaxy') || modelLower.includes('fold')) {
        return '<span class="phone-brand-icon samsung" title="Samsung"></span>';
    } else if (modelLower.includes('pixel') || modelLower.includes('google')) {
        return '<span class="phone-brand-icon google" title="Google Pixel"></span>';
    }
    return '';
}

function createPhoneCard(phone, options = {}) {
    const { showRemove = false, showSwap = false, showDelete = false, pendingType = null, inModal = false, scheduledFor = null, isIncoming = false, ownerName = null } = options;

    const div = document.createElement('div');
    div.dataset.phoneId = phone.id;
    div.dataset.ownerName = ownerName || '';
    div.className = 'laptop-card'; // Reuse laptop card styling
    if (phone.tier) div.classList.add(`tier-${phone.tier}`);
    if (pendingType === 'out') div.classList.add('pending-out');
    if (pendingType === 'in') div.classList.add('pending-in');
    if (pendingType === 'soon') div.classList.add('pending-soon');
    if (pendingType === 'scheduled') div.classList.add('pending-scheduled');
    if (phone.isNew) div.classList.add('brand-new');
    div.draggable = !inModal && (!pendingType || pendingType === 'soon' || pendingType === 'scheduled');

    // Get brand icon
    const brandIcon = getPhoneBrandIcon(phone.model);

    let badgeHtml = '';

    // Add uncertainty indicator if set
    if (phone.isUncertain) {
        badgeHtml += `<span class="uncertain-indicator" title="Uncertain about device">?</span>`;
    }

    if (pendingType === 'out') {
        if (phone.tier) badgeHtml += `<span class="tier-badge tier-${phone.tier}">${phone.tier}</span>`;
        if (phone.isNew) badgeHtml += '<span class="new-badge">New</span>';
        // Show where this phone is going if scheduled for someone
        if (scheduledFor) {
            badgeHtml += `<span class="pending-badge out">→ ${scheduledFor}</span>`;
        }
    } else if (pendingType === 'in') {
        if (phone.tier) badgeHtml += `<span class="tier-badge tier-${phone.tier}">${phone.tier}</span>`;
        if (phone.isNew) badgeHtml += '<span class="new-badge">New</span>';
    } else if (pendingType === 'soon') {
        badgeHtml = '';
    } else if (pendingType === 'scheduled') {
        badgeHtml = `<span class="pending-badge scheduled">→ ${scheduledFor}</span>`;
    } else {
        if (phone.tier) badgeHtml += `<span class="tier-badge tier-${phone.tier}">${phone.tier}</span>`;
        if (phone.isNew && !ownerName) badgeHtml += '<span class="new-badge">New</span>';
    }

    let actionsHtml = '';
    if (showSwap || showRemove || showDelete) {
        actionsHtml = '<div class="laptop-actions">';
        if (showSwap) actionsHtml += `<button class="btn-icon btn-swap" title="Schedule swap">↔</button>`;
        if (showRemove) actionsHtml += `<button class="btn-icon btn-remove" title="Remove">×</button>`;
        if (showDelete) actionsHtml += `<button class="btn-icon btn-remove" title="Delete" data-phone-delete="${phone.id}">🗑</button>`;
        actionsHtml += '</div>';
    }

    div.innerHTML = `
                <div class="laptop-header">
                    <span class="laptop-model">${brandIcon}${phone.model}</span>
                    <span class="phone-badges">${badgeHtml}</span>
                    ${actionsHtml}
                </div>
                <div class="laptop-specs">
                    <div class="spec"><span class="spec-label">Storage:</span><span class="spec-value">${phone.storage || '-'}</span></div>
                    <div class="spec"><span class="spec-label">Colour:</span><span class="spec-value">${phone.colour || '-'}</span></div>
                </div>
            `;

    if (!inModal) {
        div.addEventListener('dblclick', (e) => {
            e.stopPropagation();
            openEditPhoneModal(phone.id);
        });
    }

    if (!inModal && (!pendingType || pendingType === 'soon' || pendingType === 'scheduled')) {
        div.addEventListener('dragstart', (e) => {
            const personName = Object.keys(phoneAssignments).find(k => phoneAssignments[k] === phone.id);
            if (personName && lockedPhoneAssignments[personName]) {
                e.preventDefault();
                return;
            }
            draggedPhone = phone.id;
            phoneDragSource = personName || 'inventory';
            div.classList.add('dragging');
        });

        div.addEventListener('dragend', () => {
            div.classList.remove('dragging');
            draggedPhone = null;
            phoneDragSource = null;
        });
    }

    // Add delete button listener
    const deleteBtn = div.querySelector('[data-phone-delete]');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            openDeletePhoneModal(phone.id);
        });
    }

    // Phone swap selection mode
    if (phoneSwapSelectionMode && ownerName !== phoneSwapSourcePerson) {
        div.classList.add('swap-selectable');
        div.addEventListener('click', (e) => {
            e.stopPropagation();
            selectPhoneForSwap(phone.id, ownerName);
        });
    }

    return div;
}

// Render phone people grid
function renderPhonePeopleGrid() {
    const grid = document.getElementById('phone-people-grid');
    if (!grid) return;
    grid.innerHTML = '';

    // Sort people by phone tier
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    const sortedPeople = [...people].sort((a, b) => {
        const tierA = tierOrder[a.phoneTier || 'B'] || 4;
        const tierB = tierOrder[b.phoneTier || 'B'] || 4;
        return tierA - tierB;
    });

    // Group people by phone tier
    const tiers = ['S', 'A', 'B', 'C', 'D'];
    tiers.forEach(tier => {
        let tierPeople = sortedPeople.filter(p => (p.phoneTier || 'B') === tier);
        if (tierPeople.length === 0) return;

        // Sort so locked people appear last
        tierPeople.sort((a, b) => {
            const aLocked = lockedPhoneAssignments[a.name] === true ? 1 : 0;
            const bLocked = lockedPhoneAssignments[b.name] === true ? 1 : 0;
            return aLocked - bLocked;
        });

        const tierRow = document.createElement('div');
        tierRow.className = 'tier-row';
        tierRow.style.cssText = 'display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 20px; width: 100%;';

        tierPeople.forEach(person => {
            const card = document.createElement('div');
            const isLocked = lockedPhoneAssignments[person.name] === true;
            card.className = 'person-card' + (isLocked ? ' locked' : '');
            card.dataset.personName = person.name;

            const phoneTier = person.phoneTier || 'B';
            const hasPendingSwap = pendingPhoneSwaps[person.name] !== undefined;
            const phoneId = phoneAssignments[person.name];
            const phone = phoneId ? getPhoneById(phoneId) : null;

            const isUncertain = person.phoneUncertain === true;

            // Phone preference indicator
            let prefIcon = '';
            if (person.phonePreference === 'iphone') {
                prefIcon = '<span class="phone-brand-icon apple" title="Prefers iPhone"></span>';
            } else if (person.phonePreference === 'samsung') {
                prefIcon = '<span class="phone-brand-icon samsung" title="Prefers Samsung"></span>';
            } else if (person.phonePreference === 'pixel') {
                prefIcon = '<span class="phone-brand-icon google" title="Prefers Pixel"></span>';
            }

            card.innerHTML = `<div class="person-header tier-${phoneTier}"><span class="person-name">${prefIcon}${person.name}</span><label class="lock-checkbox-container" title="Lock this phone assignment"><input type="checkbox" class="lock-checkbox" ${isLocked ? 'checked' : ''} /><span class="lock-icon">${isLocked ? '🔒' : '🔓'}</span></label><span class="tier-badge tier-${phoneTier}" data-person-name="${person.name}" data-phone-tier="true" style="cursor:pointer;" title="Click to change phone tier">${phoneTier}</span></div>`;

            // Add lock checkbox handler
            card.querySelector('.lock-checkbox').addEventListener('change', (e) => {
                e.stopPropagation();
                lockedPhoneAssignments[person.name] = e.target.checked;
                saveData();
                renderAll();
            });

            // Add tier click handler for phone tier
            card.querySelector('.tier-badge[data-phone-tier]').addEventListener('click', (e) => {
                e.stopPropagation();
                showPhoneTierSelector(person.name, e.target);
            });

            // Add double-click handler to open edit person modal
            card.addEventListener('dblclick', (e) => {
                // Don't trigger if clicking on interactive elements
                if (e.target.closest('.lock-checkbox-container') || e.target.closest('.tier-badge') || e.target.closest('.laptop-card')) {
                    return;
                }
                const index = people.findIndex(p => p.name === person.name);
                if (index !== -1) {
                    openEditPersonModal(index);
                }
            });

            const slot = document.createElement('div');
            slot.className = 'laptop-slot';

            // Calculate if this person's phone is scheduled for someone else
            let scheduledRecipient = null;
            if (phoneId) {
                Object.keys(pendingPhoneSwaps).forEach(recipient => {
                    if (pendingPhoneSwaps[recipient].newPhoneId === phoneId) {
                        scheduledRecipient = recipient;
                    }
                });
            }

            if (phone) {
                const pendingType = hasPendingSwap ? 'out' : (scheduledRecipient ? 'scheduled' : null);
                const phoneCard = createPhoneCard(phone, {
                    showRemove: !hasPendingSwap && !scheduledRecipient,
                    showSwap: !hasPendingSwap && !scheduledRecipient,
                    pendingType,
                    ownerName: person.name,
                    scheduledFor: scheduledRecipient
                });

                // Add uncertain checkbox handler (using mini logic)
                phoneCard.querySelector('.uncertain-mini-checkbox')?.addEventListener('change', (e) => {
                    // ... (existing handler if needed, but we removed it in previous step, checking context)
                });

                // Existing handlers...
                phoneCard.querySelector('.btn-swap')?.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openPhoneSwapModal(person.name);
                });

                phoneCard.querySelector('.btn-remove')?.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openPhoneRemoveModal(person.name);
                });

                slot.appendChild(phoneCard);

                if (hasPendingSwap) {
                    const newPhone = getPhoneById(pendingPhoneSwaps[person.name].newPhoneId);
                    if (newPhone) {
                        const incomingCard = createPhoneCard(newPhone, { pendingType: 'in', isIncoming: true });

                        if (newPhone.status === 'incoming') {
                            const header = incomingCard.querySelector('.laptop-header'); // reused class
                            const modelSpan = header.querySelector('.laptop-model');
                            modelSpan.innerHTML += ' <span class="pending-badge">On the Way</span>';
                        }

                        // Check if this incoming phone is coming from another person
                        const sourcePerson = Object.keys(phoneAssignments).find(p => phoneAssignments[p] === newPhone.id);
                        if (sourcePerson) {
                            const header = incomingCard.querySelector('.laptop-header');
                            const modelSpan = header.querySelector('.laptop-model');
                            modelSpan.innerHTML += ` <span class="pending-badge from-badge">From ${sourcePerson}</span>`;
                        }

                        // Complete swap button
                        const completeBtn = document.createElement('button');
                        completeBtn.className = 'btn-icon btn-edit';
                        completeBtn.title = 'Complete swap';
                        completeBtn.innerHTML = '✓';
                        completeBtn.style.color = '#10b981';
                        completeBtn.style.borderColor = '#6ee7b7';
                        completeBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            saveStateForUndo();
                            const oldPhoneId = phoneAssignments[person.name];
                            const newPhoneId = pendingPhoneSwaps[person.name].newPhoneId;

                            // Check if new phone comes from another person (hand-me-down)
                            const previousOwner = Object.keys(phoneAssignments).find(p => phoneAssignments[p] === newPhoneId);

                            logPhoneOwnershipChange(newPhoneId, person.name);
                            if (previousOwner) {
                                logPhoneOwnershipChange(newPhoneId, person.name, `Transferred from ${previousOwner}`);
                                phoneAssignments[previousOwner] = null; // Remove from previous owner
                            }

                            // Unassign old phone
                            if (oldPhoneId) {
                                logPhoneOwnershipChange(oldPhoneId, null);
                                // phoneAssignments[person.name] = null; // Implicit overwrite
                            }

                            phoneAssignments[person.name] = newPhoneId;
                            delete pendingPhoneSwaps[person.name];

                            // Update status
                            const newPhoneObj = getPhoneById(newPhoneId);
                            if (newPhoneObj) newPhoneObj.status = 'assigned';
                            if (oldPhoneId) {
                                const oldPhoneObj = getPhoneById(oldPhoneId);
                                if (oldPhoneObj) oldPhoneObj.status = 'available';
                            }

                            saveData();
                            renderAll();
                        });

                        // Add cancel button for swap
                        const cancelBtn = document.createElement('button');
                        cancelBtn.className = 'btn-icon btn-remove';
                        cancelBtn.title = 'Cancel swap';
                        cancelBtn.innerHTML = '×';
                        cancelBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            delete pendingPhoneSwaps[person.name];
                            saveData();
                            renderAll();
                        });

                        const actionsDiv = document.createElement('div');
                        actionsDiv.className = 'laptop-actions';
                        actionsDiv.appendChild(completeBtn);
                        actionsDiv.appendChild(cancelBtn);

                        const header = incomingCard.querySelector('.laptop-header');
                        if (header.querySelector('.laptop-actions')) {
                            header.querySelector('.laptop-actions').remove();
                        }
                        header.appendChild(actionsDiv);

                        slot.appendChild(incomingCard);
                    }
                }
            } else {
                // No current phone - but might have a pending swap (receiving a phone)
                if (hasPendingSwap && pendingPhoneSwaps[person.name].currentPhoneId === null) {
                    // Person has no phone but is scheduled to receive one
                    const newPhone = getPhoneById(pendingPhoneSwaps[person.name].newPhoneId);
                    if (newPhone) {
                        const incomingCard = createPhoneCard(newPhone, { pendingType: 'in', isIncoming: true });

                        if (newPhone.status === 'incoming') {
                            const header = incomingCard.querySelector('.laptop-header');
                            const modelSpan = header.querySelector('.laptop-model');
                            modelSpan.innerHTML += ' <span class="pending-badge">On the Way</span>';
                        }

                        // Check if this incoming phone is coming from another person
                        const sourcePerson = Object.keys(phoneAssignments).find(p => phoneAssignments[p] === newPhone.id);
                        if (sourcePerson) {
                            const header = incomingCard.querySelector('.laptop-header');
                            const modelSpan = header.querySelector('.laptop-model');
                            modelSpan.innerHTML += ` <span class="pending-badge from-badge">From ${sourcePerson}</span>`;
                        }

                        // Complete swap button
                        const completeBtn = document.createElement('button');
                        completeBtn.className = 'btn-icon btn-edit';
                        completeBtn.title = 'Complete assignment';
                        completeBtn.innerHTML = '✓';
                        completeBtn.style.color = '#10b981';
                        completeBtn.style.borderColor = '#6ee7b7';
                        completeBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            saveStateForUndo();
                            const newPhoneId = pendingPhoneSwaps[person.name].newPhoneId;

                            // Check if new phone comes from another person
                            const previousOwner = Object.keys(phoneAssignments).find(p => phoneAssignments[p] === newPhoneId);
                            if (previousOwner) {
                                logPhoneOwnershipChange(newPhoneId, null);
                                delete phoneAssignments[previousOwner];
                            }

                            // Assign new phone
                            logPhoneOwnershipChange(newPhoneId, person.name);
                            phoneAssignments[person.name] = newPhoneId;

                            const np = getPhoneById(newPhoneId);
                            if (np) {
                                np.status = 'assigned';
                                np.isNew = false;
                            }

                            delete pendingPhoneSwaps[person.name];
                            saveData();
                            renderAll();
                        });

                        // Cancel button
                        const cancelBtn = document.createElement('button');
                        cancelBtn.className = 'btn-icon btn-remove';
                        cancelBtn.title = 'Cancel';
                        cancelBtn.innerHTML = '×';
                        cancelBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            delete pendingPhoneSwaps[person.name];
                            saveData();
                            renderAll();
                        });

                        const actionsDiv = document.createElement('div');
                        actionsDiv.className = 'laptop-actions';
                        actionsDiv.appendChild(completeBtn);
                        actionsDiv.appendChild(cancelBtn);

                        const header = incomingCard.querySelector('.laptop-header');
                        if (header.querySelector('.laptop-actions')) {
                            header.querySelector('.laptop-actions').remove();
                        }
                        header.appendChild(actionsDiv);

                        slot.appendChild(incomingCard);
                    }
                } else {
                    // Empty slot styling
                    slot.innerHTML = '<div class="empty-slot">No phone assigned</div>';
                }
            }

            card.appendChild(slot);

            // Second Phone Section
            const secondPhoneSection = document.createElement('div');
            secondPhoneSection.className = 'second-phone-section';

            const secondPhoneId = secondPhoneAssignments[person.name];
            const secondPhone = secondPhoneId ? getPhoneById(secondPhoneId) : null;

            if (secondPhone) {
                // Show the second phone
                const secondPhoneCard = createPhoneCard(secondPhone, {
                    showRemove: false,
                    showSwap: false,
                    pendingType: null,
                    ownerName: person.name
                });
                secondPhoneCard.classList.add('second-phone-card');

                // Add label and remove button
                const secondPhoneHeader = document.createElement('div');
                secondPhoneHeader.className = 'second-phone-header';
                secondPhoneHeader.innerHTML = `
                    <span class="second-phone-label">2nd Phone</span>
                    <button class="btn-icon btn-remove second-phone-remove" title="Remove second phone">×</button>
                `;
                secondPhoneSection.appendChild(secondPhoneHeader);
                secondPhoneSection.appendChild(secondPhoneCard);

                // Remove second phone handler
                secondPhoneHeader.querySelector('.second-phone-remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    saveStateForUndo();
                    delete secondPhoneAssignments[person.name];
                    saveData();
                    renderAll();
                });
            } else {
                // Show "Add Second Phone" button
                const addSecondBtn = document.createElement('button');
                addSecondBtn.className = 'add-second-phone-btn';
                addSecondBtn.innerHTML = '+ Second Phone';
                addSecondBtn.title = 'Add a second phone for this person';
                addSecondBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openSecondPhoneModal(person.name);
                });
                secondPhoneSection.appendChild(addSecondBtn);
            }

            card.appendChild(secondPhoneSection);

            // Add secured banner overlay to person card if locked
            if (isLocked) {
                const banner = document.createElement('div');
                banner.className = 'secured-banner tier-' + phoneTier;
                banner.innerHTML = '<span>Secured</span>';
                card.appendChild(banner);
            }

            // Drag & Drop handlers
            card.addEventListener('dragover', (e) => {
                e.preventDefault();
                if (!isLocked && (!phoneDragSource || phoneDragSource !== person.name)) {
                    card.classList.add('drag-over');
                }
            });

            card.addEventListener('dragleave', () => {
                card.classList.remove('drag-over');
            });

            card.addEventListener('drop', (e) => {
                e.preventDefault();
                card.classList.remove('drag-over');

                if (isLocked) return;
                if (phoneDragSource !== 'inventory' && lockedPhoneAssignments[phoneDragSource]) return;

                if (draggedPhone) {
                    saveStateForUndo();

                    // Logic:
                    // 1. If person already has a phone -> Schedule Swap (One-Way)
                    // 2. If person has NO phone -> Immediate Assignment

                    if (phoneAssignments[person.name]) {
                        // Case 1: Schedule Swap - person has a phone, schedule exchange
                        pendingPhoneSwaps[person.name] = {
                            currentPhoneId: phoneAssignments[person.name],
                            newPhoneId: draggedPhone
                        };
                        console.log(`Scheduled swap: Phone ${draggedPhone} to ${person.name}`);

                    } else {
                        // Case 2: Person has NO phone - still schedule it (not immediate)
                        // This allows showing "From X" and "→ Y" badges during the transfer
                        pendingPhoneSwaps[person.name] = {
                            currentPhoneId: null,
                            newPhoneId: draggedPhone
                        };
                        console.log(`Scheduled phone ${draggedPhone} for ${person.name} (no current phone)`);
                    }

                    saveData();
                    renderAll();
                }
            });

            tierRow.appendChild(card);
        });

        grid.appendChild(tierRow);
    });
}

// Render phone inventory
function renderPhoneInventory() {
    const content = document.getElementById('phone-inventory-grid');
    if (!content) return;

    // Calculate scheduled map first
    const scheduledFor = {};
    Object.keys(pendingPhoneSwaps).forEach(personName => {
        const swap = pendingPhoneSwaps[personName];
        scheduledFor[swap.newPhoneId] = personName;
    });

    const allAvailable = getAvailablePhones().filter(p => p.status !== 'incoming');
    const available = sortPhonesByTier(allAvailable.filter(p => !scheduledFor[p.id]));
    const availableScheduled = sortPhonesByTier(allAvailable.filter(p => scheduledFor[p.id]));

    const onTheWay = sortPhonesByTier(phones.filter(p => p.status === 'incoming'));

    // Split soon available
    const soonAvailable = getPendingOutgoingPhones();
    const toInventory = sortPhonesByTier(soonAvailable.filter(p => !scheduledFor[p.id]));
    const soonScheduled = sortPhonesByTier(soonAvailable.filter(p => scheduledFor[p.id]));

    // Combine scheduled lists
    const goingToSomeone = [...soonScheduled, ...availableScheduled];

    content.innerHTML = '';

    if (available.length === 0 && soonAvailable.length === 0 && onTheWay.length === 0 && availableScheduled.length === 0) {
        content.innerHTML = '<div class="empty-message">No phones in inventory</div>';
        return;
    }

    // Available section
    if (available.length > 0) {
        const availableSection = document.createElement('div');
        availableSection.className = 'inventory-section';
        availableSection.innerHTML = '<div class="inventory-section-title">Available</div>';

        const availableGrid = document.createElement('div');
        availableGrid.className = 'inventory-grid';

        available.forEach(phone => {
            availableGrid.appendChild(createPhoneCard(phone, { showDelete: true, ownerName: null }));
        });

        availableSection.appendChild(availableGrid);
        content.appendChild(availableSection);
    }

    // Returning to Inventory section
    if (toInventory.length > 0) {
        const soonSection = document.createElement('div');
        soonSection.className = 'inventory-section';
        soonSection.innerHTML = '<div class="inventory-section-title">Returning to Inventory</div>';

        const soonGrid = document.createElement('div');
        soonGrid.className = 'inventory-grid';

        toInventory.forEach(phone => {
            const card = createPhoneCard(phone, { pendingType: 'soon', ownerName: null });
            card.draggable = true;
            card.addEventListener('dragstart', () => {
                draggedPhone = phone.id;
                phoneDragSource = 'inventory';
                card.classList.add('dragging');
            });
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
                draggedPhone = null;
                phoneDragSource = null;
            });
            soonGrid.appendChild(card);
        });

        soonSection.appendChild(soonGrid);
        content.appendChild(soonSection);
    }

    // Going to Someone section
    if (goingToSomeone.length > 0) {
        const goingSection = document.createElement('div');
        goingSection.className = 'inventory-section';
        goingSection.innerHTML = '<div class="inventory-section-title">Going to Someone</div>';

        const goingGrid = document.createElement('div');
        goingGrid.className = 'inventory-grid';

        goingToSomeone.forEach(phone => {
            // Determine pending type: 'soon' for outgoing, 'scheduled' for inventory
            const isOutgoing = soonAvailable.some(p => p.id === phone.id);
            const pendingType = isOutgoing ? 'soon' : 'scheduled';

            const card = createPhoneCard(phone, {
                pendingType: pendingType,
                ownerName: null,
                scheduledFor: scheduledFor[phone.id]
            });

            // If it's outgoing, the text is added by createPhoneCard, but let's ensure visuals
            // Actually createPhoneCard handles 'scheduled' pendingType well

            goingGrid.appendChild(card);
        });

        goingSection.appendChild(goingGrid);
        content.appendChild(goingSection);
    }

    // On the Way section
    if (onTheWay.length > 0) {
        const onTheWaySection = document.createElement('div');
        onTheWaySection.className = 'inventory-section';
        onTheWaySection.innerHTML = '<div class="inventory-section-title">On the Way</div>';

        const onTheWayGrid = document.createElement('div');
        onTheWayGrid.className = 'inventory-grid';

        const scheduledForIncoming = {};
        Object.keys(pendingPhoneSwaps).forEach(personName => {
            const swap = pendingPhoneSwaps[personName];
            scheduledForIncoming[swap.newPhoneId] = personName;
        });

        onTheWay.forEach(phone => {
            const card = createPhoneCard(phone, { isIncoming: true, ownerName: null });
            card.classList.add('incoming-laptop');

            const header = card.querySelector('.laptop-header');
            const modelSpan = header.querySelector('.laptop-model');

            if (scheduledForIncoming[phone.id]) {
                modelSpan.innerHTML += ` <span class="pending-badge scheduled">→ ${scheduledForIncoming[phone.id]}</span>`;
            }

            // Add Arrived button
            const arrivedBtn = document.createElement('button');
            arrivedBtn.className = 'btn-icon btn-edit';
            arrivedBtn.title = 'Mark as Arrived';
            arrivedBtn.innerHTML = '✓';
            arrivedBtn.style.color = '#10b981';
            arrivedBtn.style.borderColor = '#6ee7b7';
            arrivedBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                markPhoneAsArrived(phone.id);
            });
            header.appendChild(arrivedBtn);

            card.draggable = true;
            card.addEventListener('dragstart', () => {
                draggedPhone = phone.id;
                phoneDragSource = 'inventory';
                card.classList.add('dragging');
            });
            card.addEventListener('dragend', () => {
                card.classList.remove('dragging');
                draggedPhone = null;
                phoneDragSource = null;
            });
            onTheWayGrid.appendChild(card);
        });

        onTheWaySection.appendChild(onTheWayGrid);
        content.appendChild(onTheWaySection);
    }

    // Used as Second Phones section
    const secondPhoneIds = Object.values(secondPhoneAssignments);
    const secondPhones = sortPhonesByTier(phones.filter(p => secondPhoneIds.includes(p.id)));

    if (secondPhones.length > 0) {
        const secondPhoneSection = document.createElement('div');
        secondPhoneSection.className = 'inventory-section';
        secondPhoneSection.innerHTML = '<div class="inventory-section-title second-phone-title">Used as Second Phones</div>';

        const secondPhoneGrid = document.createElement('div');
        secondPhoneGrid.className = 'inventory-grid';

        secondPhones.forEach(phone => {
            // Find who has this as their second phone
            const owner = Object.keys(secondPhoneAssignments).find(name => secondPhoneAssignments[name] === phone.id);

            const card = createPhoneCard(phone, { ownerName: null });
            card.classList.add('second-phone-inventory');

            // Add owner badge
            const header = card.querySelector('.laptop-header');
            const modelSpan = header.querySelector('.laptop-model');
            if (owner) {
                modelSpan.innerHTML += ` <span class="pending-badge second-owner">2nd: ${owner}</span>`;
            }

            secondPhoneGrid.appendChild(card);
        });

        secondPhoneSection.appendChild(secondPhoneGrid);
        content.appendChild(secondPhoneSection);
    }
}

// Setup phone inventory drop zone
function setupPhoneInventoryDropZone() {
    const panel = document.getElementById('phone-inventory-panel');
    if (!panel) return;

    panel.addEventListener('dragover', (e) => {
        if (phoneDragSource !== 'inventory') {
            e.preventDefault();
        }
    });

    panel.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedPhone && phoneDragSource !== 'inventory') {
            saveStateForUndo();
            logPhoneOwnershipChange(draggedPhone, null);
            phoneAssignments[phoneDragSource] = null;
            renderAll();
        }
    });
}

// Phone tier selector
function showPhoneTierSelector(personName, targetElement) {
    const existing = document.querySelector('.tier-selector');
    if (existing) existing.remove();

    const selector = document.createElement('div');
    selector.className = 'tier-selector';

    const tiers = ['S', 'A', 'B', 'C'];
    tiers.forEach(tier => {
        const btn = document.createElement('button');
        btn.className = `tier-option tier-${tier}`;
        btn.textContent = tier;
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const person = people.find(p => p.name === personName);
            if (person) {
                saveStateForUndo();
                person.phoneTier = tier;
            }
            selector.remove();
            renderAll();
        });
        selector.appendChild(btn);
    });

    const rect = targetElement.getBoundingClientRect();
    selector.style.left = rect.left + 'px';
    selector.style.top = (rect.bottom + 5) + 'px';

    document.body.appendChild(selector);

    const closeHandler = (e) => {
        if (!selector.contains(e.target)) {
            selector.remove();
            document.removeEventListener('click', closeHandler);
        }
    };
    setTimeout(() => document.addEventListener('click', closeHandler), 0);
}

// Phone swap selection mode
function startPhoneSwapSelection(personName) {
    if (lockedPhoneAssignments[personName]) return;
    phoneSwapSelectionMode = true;
    phoneSwapSourcePerson = personName;
    document.body.classList.add('swap-selection-mode');

    let banner = document.getElementById('phone-swap-banner');
    if (!banner) {
        banner = document.createElement('div');
        banner.id = 'phone-swap-banner';
        banner.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; background: #3b82f6; color: white; padding: 12px; text-align: center; z-index: 1000; font-weight: 500;';
        document.body.appendChild(banner);
    }
    banner.innerHTML = `Select a phone to swap with <strong>${personName}</strong>'s phone <button onclick="cancelPhoneSwapSelection()" style="margin-left: 16px; padding: 4px 12px; background: white; color: #3b82f6; border: none; border-radius: 4px; cursor: pointer;">Cancel</button>`;
    banner.style.display = 'block';

    renderAll();
}

function cancelPhoneSwapSelection() {
    phoneSwapSelectionMode = false;
    phoneSwapSourcePerson = null;
    document.body.classList.remove('swap-selection-mode');
    const banner = document.getElementById('phone-swap-banner');
    if (banner) banner.style.display = 'none';
    renderAll();
}

function selectPhoneForSwap(phoneId, ownerName) {
    if (!phoneSwapSelectionMode || !phoneSwapSourcePerson) return;

    const sourcePhoneId = phoneAssignments[phoneSwapSourcePerson];

    if (ownerName === phoneSwapSourcePerson) {
        cancelPhoneSwapSelection();
        return;
    }

    saveStateForUndo();

    if (ownerName && ownerName !== phoneSwapSourcePerson) {
        pendingPhoneSwaps[phoneSwapSourcePerson] = {
            currentPhoneId: sourcePhoneId,
            newPhoneId: phoneId
        };
        pendingPhoneSwaps[ownerName] = {
            currentPhoneId: phoneId,
            newPhoneId: sourcePhoneId
        };
    } else {
        pendingPhoneSwaps[phoneSwapSourcePerson] = {
            currentPhoneId: sourcePhoneId,
            newPhoneId: phoneId
        };
    }

    cancelPhoneSwapSelection();
}

function openPhoneSwapModal(personName) {
    if (lockedPhoneAssignments[personName]) return;
    startPhoneSwapSelection(personName);
}

function closePhoneSwapModal() {
    document.getElementById('phone-swap-modal').classList.remove('active');
    phoneSwapPersonIndex = null;
    selectedSwapPhone = null;
}

function confirmPhoneSwap() {
    if (phoneSwapPersonIndex && selectedSwapPhone) {
        Object.keys(pendingPhoneSwaps).forEach(key => {
            if (pendingPhoneSwaps[key].newPhoneId === selectedSwapPhone) {
                delete pendingPhoneSwaps[key];
            }
        });

        pendingPhoneSwaps[phoneSwapPersonIndex] = {
            currentPhoneId: phoneAssignments[phoneSwapPersonIndex],
            newPhoneId: selectedSwapPhone
        };
        closePhoneSwapModal();
        renderAll();
    }
}

// Phone remove modal
function openPhoneRemoveModal(personName) {
    if (lockedPhoneAssignments[personName]) return;
    phoneRemovePersonIndex = personName;
    selectedPhoneRemoveAction = null;
    document.querySelectorAll('#phone-remove-modal .remove-option').forEach(o => o.classList.remove('selected'));
    document.getElementById('confirm-phone-remove-btn').disabled = true;
    document.getElementById('phone-remove-modal').classList.add('active');
}

function closePhoneRemoveModal() {
    document.getElementById('phone-remove-modal').classList.remove('active');
    phoneRemovePersonIndex = null;
    selectedPhoneRemoveAction = null;
}

function selectPhoneRemoveOption(action) {
    selectedPhoneRemoveAction = action;
    document.querySelectorAll('#phone-remove-modal .remove-option').forEach(o => o.classList.remove('selected'));
    document.querySelector(`#phone-remove-modal .remove-option[data-action="${action}"]`).classList.add('selected');
    document.getElementById('confirm-phone-remove-btn').disabled = false;
}

function confirmPhoneRemove() {
    if (phoneRemovePersonIndex && selectedPhoneRemoveAction) {
        saveStateForUndo();
        const phoneId = phoneAssignments[phoneRemovePersonIndex];

        if (selectedPhoneRemoveAction === 'inventory' && phoneId) {
            logPhoneOwnershipChange(phoneId, null);
        }

        delete phoneAssignments[phoneRemovePersonIndex];

        if (selectedPhoneRemoveAction === 'bin') {
            phones = phones.filter(p => p.id !== phoneId);
        }

        closePhoneRemoveModal();
        renderAll();
    }
}

// Second Phone Modal
let secondPhonePersonName = null;

function openSecondPhoneModal(personName) {
    secondPhonePersonName = personName;
    const modal = document.getElementById('second-phone-modal');
    const phoneList = document.getElementById('second-phone-list');

    // Get all phones that could be assigned as a second phone
    // Include: inventory phones + phones assigned to other people (as a choice)
    const availablePhones = phones.filter(p => {
        // Exclude phones already assigned as primary
        const isPrimary = Object.values(phoneAssignments).includes(p.id);
        // Exclude phones already assigned as second phone
        const isSecond = Object.values(secondPhoneAssignments).includes(p.id);
        // Exclude incoming phones
        const isIncoming = p.status === 'incoming';
        return !isPrimary && !isSecond && !isIncoming;
    });

    // Sort by tier
    const tierOrder = { 'S': 0, 'A': 1, 'B': 2, 'C': 3, 'D': 4 };
    availablePhones.sort((a, b) => (tierOrder[a.tier] || 4) - (tierOrder[b.tier] || 4));

    phoneList.innerHTML = '';

    if (availablePhones.length === 0) {
        phoneList.innerHTML = '<div class="empty-slot">No phones available</div>';
    } else {
        availablePhones.forEach(phone => {
            const phoneCard = createPhoneCard(phone, { inModal: true });
            phoneCard.style.cursor = 'pointer';
            phoneCard.addEventListener('click', () => {
                saveStateForUndo();
                secondPhoneAssignments[personName] = phone.id;
                saveData();
                closeSecondPhoneModal();
                renderAll();
            });
            phoneList.appendChild(phoneCard);
        });
    }

    modal.classList.add('active');
}

function closeSecondPhoneModal() {
    document.getElementById('second-phone-modal').classList.remove('active');
    secondPhonePersonName = null;
}

// Add/Edit Phone Modal
function openAddPhoneModal() {
    editingPhoneId = null;
    document.getElementById('phone-modal-title').textContent = 'Add New Phone';
    document.getElementById('phone-modal-desc').textContent = 'Enter the phone specifications below';
    document.getElementById('phone-submit-btn').textContent = 'Add Phone';
    document.getElementById('phone-form').reset();
    document.getElementById('phone-new').checked = true;
    document.getElementById('phone-owner-history-section').style.display = 'none';
    document.getElementById('phone-tier-row').style.display = 'none'; // Hide tier selection when adding
    document.getElementById('phone-modal').classList.add('active');
}

function openEditPhoneModal(phoneId) {
    editingPhoneId = phoneId;
    const phone = getPhoneById(phoneId);
    if (!phone) return;

    document.getElementById('phone-modal-title').textContent = 'Edit Phone';
    document.getElementById('phone-modal-desc').textContent = 'Update the phone specifications';
    document.getElementById('phone-submit-btn').textContent = 'Save Changes';

    document.getElementById('phone-model').value = phone.model || '';
    document.getElementById('phone-storage').value = phone.storage || '';
    document.getElementById('phone-colour').value = phone.colour || '';
    document.getElementById('phone-tier').value = phone.tier || 'B';
    document.getElementById('phone-tier-row').style.display = 'flex'; // Show tier selection when editing
    updatePhoneTierWarning(phone.model || '');
    document.getElementById('phone-status').value = phone.status || 'available';
    document.getElementById('phone-new').checked = phone.isNew || false;
    document.getElementById('phone-uncertain').checked = phone.isUncertain || false;

    let scheduledTo = null;
    Object.keys(pendingPhoneSwaps).forEach(personName => {
        if (pendingPhoneSwaps[personName].newPhoneId === phoneId) {
            scheduledTo = personName;
        }
    });

    const historySection = document.getElementById('phone-owner-history-section');
    historySection.style.display = 'block';
    renderPhoneOwnerHistoryEditor(phone.ownerHistory || [], scheduledTo);

    document.getElementById('phone-modal').classList.add('active');
}

function renderPhoneOwnerHistoryEditor(history, scheduledTo = null) {
    editingPhoneOwnerHistory = JSON.parse(JSON.stringify(history || []));
    const historyList = document.getElementById('phone-owner-history-list');

    let html = '';

    if (scheduledTo) {
        html += `<div style="padding: 6px 8px; background: #dbeafe; border-radius: 4px; margin-bottom: 8px; color: #1d4ed8; font-weight: 500;">
                    <span style="color: #6b7280; font-weight: normal;">Scheduled:</span> → ${scheduledTo}
                </div>`;
    }

    if (editingPhoneOwnerHistory.length === 0 && !scheduledTo) {
        historyList.innerHTML = '<div style="color: #9ca3af; font-style: italic;">No history yet</div>';
        return;
    }

    html += editingPhoneOwnerHistory.map((entry, i) => {
        const ownerValue = entry.owner || '';
        return `
                    <div style="display: flex; gap: 8px; align-items: center; padding: 6px 0; ${i > 0 ? 'border-top: 1px solid #e5e7eb;' : ''}">
                        <input type="text" value="${entry.date}" onchange="updatePhoneHistoryEntry(${i}, 'date', this.value)" style="width: 80px; padding: 4px 6px; font-size: 11px; border: 1px solid #d1d5db; border-radius: 4px;">
                        <input type="text" value="${ownerValue}" placeholder="Inventory" onchange="updatePhoneHistoryEntry(${i}, 'owner', this.value)" style="flex: 1; padding: 4px 6px; font-size: 11px; border: 1px solid #d1d5db; border-radius: 4px;">
                        <button type="button" onclick="removePhoneHistoryEntry(${i})" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 14px; padding: 2px 6px;">×</button>
                    </div>
                `;
    }).join('');

    historyList.innerHTML = html;
}

function addPhoneHistoryEntry() {
    const today = new Date().toISOString().split('T')[0];
    editingPhoneOwnerHistory.push({ date: today, owner: '' });
    renderPhoneOwnerHistoryEditor(editingPhoneOwnerHistory);
}

function updatePhoneHistoryEntry(index, field, value) {
    if (editingPhoneOwnerHistory[index]) {
        editingPhoneOwnerHistory[index][field] = value || (field === 'owner' ? null : value);
    }
}

function removePhoneHistoryEntry(index) {
    editingPhoneOwnerHistory.splice(index, 1);
    renderPhoneOwnerHistoryEditor(editingPhoneOwnerHistory);
}

function closePhoneModal() {
    document.getElementById('phone-modal').classList.remove('active');
    editingPhoneId = null;
    editingPhoneOwnerHistory = [];
}

function savePhone(e) {
    e.preventDefault();
    saveStateForUndo();

    const model = document.getElementById('phone-model').value;
    let tier;

    if (editingPhoneId) {
        // When editing, use the tier from dropdown
        tier = document.getElementById('phone-tier').value;
        // Phones have 5 tiers (S, A, B, C, D)
        // if (tier === 'D') tier = 'C';
        // Enforce USB-C constraint: non-USB-C phones must be B tier or below
        if (!phoneHasUSBC({ model: model })) {
            if (tier === 'S' || tier === 'A') {
                tier = 'B';
            }
        }
    } else {
        // When adding, auto-determine tier based on model
        tier = autoTierPhone(model);
    }

    const phoneData = {
        model: model,
        storage: document.getElementById('phone-storage').value,
        colour: document.getElementById('phone-colour').value,
        tier: tier,
        status: document.getElementById('phone-status').value,
        isNew: document.getElementById('phone-new').checked,
        isUncertain: document.getElementById('phone-uncertain').checked
    };

    if (editingPhoneId) {
        const index = phones.findIndex(p => p.id === editingPhoneId);
        if (index !== -1) {
            phones[index] = { ...phones[index], ...phoneData };
            phones[index].ownerHistory = editingPhoneOwnerHistory.map(entry => ({
                date: entry.date,
                owner: entry.owner || null
            }));
        }
    } else {
        phones.push({
            id: nextPhoneId++,
            ...phoneData
        });
    }

    closePhoneModal();
    renderAll();
}

// Show warning if phone doesn't have USB-C
function updatePhoneTierWarning(model) {
    const warning = document.getElementById('phone-tier-warning');
    if (warning) {
        if (!phoneHasUSBC({ model: model })) {
            warning.style.display = 'block';
        } else {
            warning.style.display = 'none';
        }
    }
}

// Delete Phone Modal
function openDeletePhoneModal(phoneId) {
    deletingPhoneId = phoneId;
    const phone = getPhoneById(phoneId);
    if (!phone) return;

    document.getElementById('delete-phone-info').innerHTML = `
                <strong>${phone.model}</strong><br>
                <span style="font-size:12px;color:#6b7280;">
                    ${[phone.storage, phone.colour].filter(Boolean).join(' • ')}
                </span>
            `;
    document.getElementById('delete-phone-modal').classList.add('active');
}

function closeDeletePhoneModal() {
    document.getElementById('delete-phone-modal').classList.remove('active');
    deletingPhoneId = null;
}

function confirmDeletePhone() {
    if (deletingPhoneId) {
        saveStateForUndo();
        phones = phones.filter(p => p.id !== deletingPhoneId);
        closeDeletePhoneModal();
        renderAll();
    }
}

// Phone table functions
function renderPhonesTable() {
    const tbody = document.getElementById('phones-table-body');
    if (!tbody) return;
    const searchTerm = document.getElementById('phone-search')?.value.toLowerCase() || '';

    const filtered = phones.filter(p => {
        const searchStr = `${p.model} ${p.colour} ${p.storage}`.toLowerCase();
        return searchStr.includes(searchTerm);
    });

    tbody.innerHTML = filtered.map(phone => {
        const status = getPhoneStatus(phone.id);
        const assignedTo = getPhoneAssignedPerson(phone.id);

        let statusBadge = '';
        if (status === 'available') {
            statusBadge = '<span class="status-badge available">Available</span>';
        } else if (status === 'assigned') {
            statusBadge = `<span class="status-badge assigned">Assigned</span>`;
        } else {
            statusBadge = '<span class="status-badge pending">Pending</span>';
        }

        const newBadge = phone.isNew ? '<span class="new-badge">New</span>' : '';
        const canDelete = status === 'available';
        const isSelected = selectedPhones.has(phone.id);

        const tierBadge = phone.tier ? `<span class="tier-badge tier-${phone.tier}">${phone.tier}</span>` : '-';

        return `
                    <tr class="tier-${phone.tier || 'B'}">
                        <td><input type="checkbox" ${isSelected ? 'checked' : ''} onchange="togglePhoneSelection(${phone.id})"></td>
                        <td>${phone.model}${newBadge}</td>
                        <td>${tierBadge}</td>
                        <td>${phone.storage || '-'}</td>
                        <td>${phone.colour || '-'}</td>
                        <td>${statusBadge}${assignedTo ? `<br><span style="font-size:11px;color:#6b7280;">${assignedTo}</span>` : ''}</td>
                        <td>
                            <div class="table-actions">
                                <button class="btn-icon btn-edit" title="Edit" onclick="openEditPhoneModal(${phone.id})">✎</button>
                                <button class="btn-icon btn-remove" title="Delete" onclick="openDeletePhoneModal(${phone.id})" ${!canDelete ? 'disabled style="opacity:0.3;cursor:not-allowed;"' : ''}>🗑</button>
                            </div>
                        </td>
                    </tr>
                `;
    }).join('');

    updatePhoneBulkActionsVisibility();
}

function togglePhoneSelection(phoneId) {
    if (selectedPhones.has(phoneId)) {
        selectedPhones.delete(phoneId);
    } else {
        selectedPhones.add(phoneId);
    }
    updatePhoneBulkActionsVisibility();
    updatePhoneSelectAllCheckbox();
}

function togglePhoneSelectAll() {
    const selectAllCheckbox = document.getElementById('phone-select-all');
    const searchTerm = document.getElementById('phone-search')?.value.toLowerCase() || '';

    const filtered = phones.filter(p => {
        const searchStr = `${p.model} ${p.colour} ${p.storage} ${p.year}`.toLowerCase();
        return searchStr.includes(searchTerm);
    });

    if (selectAllCheckbox.checked) {
        filtered.forEach(p => selectedPhones.add(p.id));
    } else {
        filtered.forEach(p => selectedPhones.delete(p.id));
    }
    renderPhonesTable();
}

function updatePhoneSelectAllCheckbox() {
    const selectAllCheckbox = document.getElementById('phone-select-all');
    if (!selectAllCheckbox) return;
    const searchTerm = document.getElementById('phone-search')?.value.toLowerCase() || '';

    const filtered = phones.filter(p => {
        const searchStr = `${p.model} ${p.colour} ${p.storage}`.toLowerCase();
        return searchStr.includes(searchTerm);
    });

    const allSelected = filtered.length > 0 && filtered.every(p => selectedPhones.has(p.id));
    selectAllCheckbox.checked = allSelected;
}

function updatePhoneBulkActionsVisibility() {
    const bulkActions = document.getElementById('phone-bulk-actions');
    const selectedCount = document.getElementById('phone-selected-count');
    if (!bulkActions || !selectedCount) return;

    if (selectedPhones.size > 0) {
        bulkActions.classList.add('visible');
        selectedCount.textContent = selectedPhones.size;
    } else {
        bulkActions.classList.remove('visible');
    }
}

function clearPhoneSelection() {
    selectedPhones.clear();
    const selectAll = document.getElementById('phone-select-all');
    if (selectAll) selectAll.checked = false;
    renderPhonesTable();
}

// Phone Bulk Edit Modal
function openPhoneBulkEditModal() {
    if (selectedPhones.size === 0) return;

    document.getElementById('phone-bulk-edit-count').textContent = selectedPhones.size;
    document.getElementById('phone-bulk-edit-form').reset();
    document.getElementById('phone-bulk-edit-modal').classList.add('active');
}

function closePhoneBulkEditModal() {
    document.getElementById('phone-bulk-edit-modal').classList.remove('active');
}

function savePhoneBulkEdit(e) {
    e.preventDefault();

    const updates = {};

    const model = document.getElementById('phone-bulk-model').value;
    const storage = document.getElementById('phone-bulk-storage').value;
    const colour = document.getElementById('phone-bulk-colour').value;
    const tier = document.getElementById('phone-bulk-tier').value;
    const isNewValue = document.getElementById('phone-bulk-new').value;

    if (model) updates.model = model;
    if (storage) updates.storage = storage;
    if (colour) updates.colour = colour;
    if (tier) updates.tier = tier;
    if (isNewValue !== '') updates.isNew = isNewValue === 'true';

    phones = phones.map(phone => {
        if (selectedPhones.has(phone.id)) {
            const updated = { ...phone, ...updates };
            // Enforce USB-C constraint
            enforcePhoneTierConstraint(updated);
            return updated;
        }
        return phone;
    });

    closePhoneBulkEditModal();
    clearPhoneSelection();
    renderAll();
}

// Update phone stats
function updatePhoneStats() {
    const assigned = getAssignedPhoneIds().length;
    const available = getAvailablePhones().length;
    const pending = Object.keys(pendingPhoneSwaps).length;

    const assignedEl = document.getElementById('phone-assigned-count');
    const availableEl = document.getElementById('phone-available-count');
    const pendingEl = document.getElementById('phone-pending-count');

    if (assignedEl) assignedEl.textContent = assigned;
    if (availableEl) availableEl.textContent = available;
    if (pendingEl) pendingEl.textContent = pending;
}

// Render all
function renderAll() {
    renderPeopleGrid();
    renderInventory();
    renderLaptopsTable();
    renderPeopleTable();
    updateStats();
    // Phone renders
    renderPhonePeopleGrid();
    renderPhoneInventory();
    renderPhonesTable();
    updatePhoneStats();
    saveData();
}

// Initialize
init();
setupInventoryDropZone();
setupPhoneInventoryDropZone();

// Show warning when model changes if phone doesn't have USB-C
document.getElementById('phone-model')?.addEventListener('input', function () {
    updatePhoneTierWarning(this.value);
});
