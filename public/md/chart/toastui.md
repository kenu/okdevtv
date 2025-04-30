# ToastUI
- https://ui.toast.com/

## Sample
```html
<link rel="stylesheet" href="https://uicdn.toast.com/chart/latest/toastui-chart.min.css" />
<script src="https://uicdn.toast.com/chart/latest/toastui-chart.min.js"></script>
<script>
  function draw() {
    const chart = toastui.Chart;
    const el = document.getElementById('chart');
    const data = {
      categories: ['Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        {
          name: 'Budget',
          data: [5000, 3000, 5000, 7000, 6000, 4000, 1000],
        },
        {
          name: 'Income',
          data: [8000, 4000, 7000, 2000, 6000, 3000, 5000],
        },
      ],
    };
    const options = {
      chart: { width: 700, height: 400 },
    };
    const barChart = chart.barChart({ el, data, options });
  }
  window.onload = draw;
</script>
<div id="chart"></div>
```
- [run sample](/md/chart/chart.html)


