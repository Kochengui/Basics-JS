const n1 = Number.parseFloat(prompt('Введите температуру в градусах Цельсия: '));
alert(`Цельсий: ${n1}, Фаренгейт: ${((9 / 5) * n1 + 32).toFixed(1)}`);
