document.addEventListener('DOMContentLoaded', function() {
    // Set active nav link based on current URL
    const currentPath = window.location.pathname;
    const homeLink = document.getElementById('nav-home');
    const adminLink = document.getElementById('nav-admin');
    
    if (currentPath === '/' && homeLink) {
        homeLink.classList.add('active');
    } else if (currentPath === '/feedback' && adminLink) {
        adminLink.classList.add('active');
    }

    // Form validation enhancement
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const submitBtn = this.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
                submitBtn.disabled = true;
                submitBtn.classList.add('loading');
            }
        });
    });

    // Auto-hide success messages after 5 seconds
    const successMessages = document.querySelectorAll('.result-card');
    successMessages.forEach(message => {
        setTimeout(() => {
            message.style.opacity = '0';
            message.style.transition = 'opacity 0.5s ease';
            setTimeout(() => message.remove(), 500);
        }, 5000);
    });

    // Real-time character count for textarea
    const textarea = document.querySelector('textarea[name="message"]');
    if (textarea) {
        const charCount = document.createElement('div');
        charCount.style.fontSize = '0.875rem';
        charCount.style.color = '#64748b';
        charCount.style.marginTop = '0.5rem';
        textarea.parentNode.appendChild(charCount);

        textarea.addEventListener('input', function() {
            const length = this.value.length;
            charCount.textContent = `${length} characters (minimum 5 required)`;
            
            if (length < 5) {
                charCount.style.color = '#ef4444';
            } else if (length < 100) {
                charCount.style.color = '#f59e0b';
            } else {
                charCount.style.color = '#10b981';
            }
        });
    }

    // Enhanced table sorting
    const tableHeaders = document.querySelectorAll('th');
    tableHeaders.forEach((header, index) => {
        if (index < tableHeaders.length - 1) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                sortTable(index);
            });
        }
    });
});

function sortTable(columnIndex) {
    const table = document.querySelector('table');
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.querySelectorAll('tr'));
    
    rows.sort((a, b) => {
        const aValue = a.cells[columnIndex].textContent.trim();
        const bValue = b.cells[columnIndex].textContent.trim();
        
        return aValue.localeCompare(bValue, undefined, { numeric: true, sensitivity: 'base' });
    });
    
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }
    
    rows.forEach(row => tbody.appendChild(row));
}

function exportTableToCSV(filename) {
    const table = document.querySelector('table');
    const rows = table.querySelectorAll('tr');
    let csv = [];
    
    for (let i = 0; i < rows.length; i++) {
        let row = [], cols = rows[i].querySelectorAll('td, th');
        
        for (let j = 0; j < cols.length; j++) {
            let text = cols[j].innerText.replace(/"/g, '""');
            row.push('"' + text + '"');
        }
        csv.push(row.join(','));
    }
    
    // Download CSV file
    const csvString = csv.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}