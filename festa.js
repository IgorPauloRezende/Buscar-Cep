const botaoFesta = document.querySelector('#botaoFesta');

const GIFS_FESTA = {
  '.astrobot-fundo2 img': 'https://aoqbeovctdonswxnkirl.supabase.co/storage/v1/object/sign/web/images/festa/festa3.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzgzN2NiNC1mNjdkLTQyZjUtYjg3Mi00NTFmZjE0Y2NkYTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2VzL2Zlc3RhL2Zlc3RhMy5naWYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzM2MzYzLCJleHAiOjMxNTUzNTQ4MDAzNjN9.BY4iNyN-wZjLgKPSQ1u8RGKuKs1fucPqysPqPT6rxSs',
  '.astrobot-fundo3 img': 'https://aoqbeovctdonswxnkirl.supabase.co/storage/v1/object/sign/web/images/festa/festa1.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzgzN2NiNC1mNjdkLTQyZjUtYjg3Mi00NTFmZjE0Y2NkYTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2VzL2Zlc3RhL2Zlc3RhMS5naWYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzM2MTIwLCJleHAiOjMxNTUzNTQ4MDAxMjB9.qITn8nrzxuW0xymE6kq6f8lKktpV70DY14c_41TYrT4',
  '.astrobot-fundo img': 'https://aoqbeovctdonswxnkirl.supabase.co/storage/v1/object/sign/web/images/festa/festa2.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzgzN2NiNC1mNjdkLTQyZjUtYjg3Mi00NTFmZjE0Y2NkYTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2VzL2Zlc3RhL2Zlc3RhMi5naWYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzM2MjkzLCJleHAiOjMxNTUzNTQ4MDAyOTN9.gc0sUanktQ_QJFkf3X6y2nSJjc7KtIj2JY2ToXolrDE',
  '#gif-sucesso': 'https://aoqbeovctdonswxnkirl.supabase.co/storage/v1/object/sign/web/images/festa/festa4.gif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xNzgzN2NiNC1mNjdkLTQyZjUtYjg3Mi00NTFmZjE0Y2NkYTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJ3ZWIvaW1hZ2VzL2Zlc3RhL2Zlc3RhNC5naWYiLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg2MzM3MzU0LCJleHAiOjMxNTUzNTQ4MDEzNTR9.VcrPX3_GPjliPuvxpADCyIXeLYLBAYtoHN_Dj_2CbuM',
};

let festaAtiva = false;

botaoFesta.addEventListener('click', () => {
  festaAtiva = !festaAtiva;

  for (const seletor in GIFS_FESTA) {
    const img = document.querySelector(seletor);
    if (!img) continue;

    if (festaAtiva) {
      img.dataset.original = img.src;
      img.src = GIFS_FESTA[seletor];
    } else if (img.dataset.original) {
      img.src = img.dataset.original;
    }
  }
});
