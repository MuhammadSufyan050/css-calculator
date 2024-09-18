function toggleTheme(): void {
    
    document.body.classList.toggle('dark');

    const themeToggleButton = document.getElementById('theme-toggle') as HTMLButtonElement;

    if (document.body.classList.contains('dark')) {
        themeToggleButton.textContent = '🌞'; 
    } else {
        themeToggleButton.textContent = '🌙'; 
    }
}

document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);

function appendToDisplay(value: string): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value += value;
}

function clearDisplay(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = '';
}

function deleteChar(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    display.value = display.value.slice(0, -1);
}
function calculate(): void {
    const display = document.getElementById('display') as HTMLInputElement;
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = 'Error'; 
    }
}

document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
