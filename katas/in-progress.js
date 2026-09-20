// ? ======================= Скользящее окно ========================
// размер окна - частота самой популярной буквы = количество необходимых замен

function characterReplacement(s, k) {
  let left = 0;
  let maxFrequency = 0;
  let maxLength = 0;
  const frequency = {};

  for (let right = 0; right < s.length; right++) {
    // 1. Добавляем правый символ
    frequency[s[right]] = (frequency[s[right]] || 0) + 1;

    // 2. Запоминаем максимальную частоту
    maxFrequency = Math.max(maxFrequency, frequency[s[right]]);

    // 3. Если замена требуется > k - уменьшаем окно
    while (right - left + 1 - maxFrequency > k) {
      frequency[s[left]]--;
      left++;
    }

    // 4. Запоминаем максимальную длину окна
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

console.log(characterReplacement('XYYX', 2)); // 4
console.log(characterReplacement('AAABABB', 1)); // 5
