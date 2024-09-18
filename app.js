var _a, _b;
function toggleTheme() {
    document.body.classList.toggle('dark');
    var themeToggleButton = document.getElementById('theme-toggle');
    if (document.body.classList.contains('dark')) {
        themeToggleButton.textContent = '🌞';
    }
    else {
        themeToggleButton.textContent = '🌙';
    }
}
(_a = document.getElementById('theme-toggle')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', toggleTheme);
function appendToDisplay(value) {
    var display = document.getElementById('display');
    display.value += value;
}
function clearDisplay() {
    var display = document.getElementById('display');
    display.value = '';
}
function deleteChar() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}
function calculate() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = 'Error';
    }
}
(_b = document.getElementById('theme-toggle')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', toggleTheme);
