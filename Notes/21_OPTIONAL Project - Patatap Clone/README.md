# Patatap Website Clone

- Learning **paper.js**.
- Need to download paperscript syntax highlighter in VSCode
- Create a Paper.js **Path** to **draw a line** into it: `var path = new Path();`
- Give the stroke a color: `path.strokeColor = 'violet';`
- Move to start and draw a line from there: `path.moveTo(start);`
- Note the **plus** operator on Point objects: `path.lineTo(start + [ 100, -50 ]);`
- Create a **Path.Circle** to **draw a Circle**: `var myCircle = new Path.Circle(new Point(100, 70), 50);`
- **Fill the color** inside the circle using: `myCircle.fillColor = 'red';`