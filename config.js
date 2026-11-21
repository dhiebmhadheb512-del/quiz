/* إعدادات اختيارية للّعبة. ما تبدّل شي هنا كان باش تفعّل الصوت بين شبكتين مختلفتين.
   1) اعمل حساب مجاني في https://www.metered.ca/tools/openrelay/
   2) انسخ رابط الـ TURN credentials API متاعك (فيه apiKey) وحطو بين الجوج علامات تنصيص في turnApi.
   مثال: turnApi: 'https://اسم-تطبيقك.metered.live/api/v1/turn/credentials?apiKey=المفتاح' */
window.CHNWA = {
  turnApi: ''
};
