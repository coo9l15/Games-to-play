function handleKeyDown(event) {
    const step = 10;
    switch (event.key) {
        case 'ArrowUp':
            if (characterY - step >= 0) {
                characterY -= step;
            }
            break;
        case 'ArrowDown':
            if (characterY + step + character.offsetHeight <= gameArea.offsetHeight) {
                characterY += step;
            }
            break;
        case 'ArrowLeft':
            if (characterX - step >= 0) {
                characterX -= step;
            }
            break;
        case 'ArrowRight':
            if (characterX + step + character.offsetWidth <= gameArea.offsetHeight) {
                characterX += step;
            }
            break;
    }
    updateCharacterPosition();
}
document.addEventListener('keydown', handleKeyDown);
