// Можна додати інтерактивність, наприклад, підсвітку навичок при наведенні
document.querySelectorAll('.skills div').forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.style.backgroundColor = 'rgba(255,255,255,0.2)';
        skill.style.padding = '5px';
        skill.style.borderRadius = '5px';
    });
    skill.addEventListener('mouseout', () => {
        skill.style.backgroundColor = 'transparent';
        skill.style.padding = '0';
    });
});
