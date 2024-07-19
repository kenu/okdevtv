# mermaid js
- https://mermaid.js.org/
- mermaid is a javascript based diagramming and charting tool.
## Pie Chart
```mermaid
pie title Pets adopted by volunteers
    "Dogs" : 386
    "Cats" : 85
    "Rats" : 15
```
- example: [/md/mermaid/m.html](/md/mermaid/m.html)

## Math

```mermaid
graph LR
  A["$$x^2 = 4$$"]
  B["$$x^2 = -4$$"]
  C["$$i = \sqrt{-1}$$"]
  D["$$x = \pm2i$$"]
  E["$$a + ib, \space where \space a, b \in {R}$$"]
```

### Complex Numbers
```mermaid
graph LR
  A["$$2+3i$$"]
  B["$$-1-i$$"]
  C["$$\sqrt2+i\sqrt3$$"]
  D["$$(2+3i)+(4-8i)=$$"]
  E["$$(2+3i)+(4-8i)=6-5i$$"]
  F["$$-(2+3i)=-2-3i$$"]
  G["$$(2+3i)(4-8i)=8+12i-16i-24i^2=8+24-4i=32-4i$$"]
```

### Complex Conjugate
```mermaid
graph LR
  A["$$a+ib=(a+ib)^* = a-ib$$"]
  B["$$(a+ib)(a-ib)=a^2+b^2$$"]
```

### Complex Numbers on the plane
```mermaid
graph LR
  A["$$|a+ib| = \sqrt{a^2+b^2}=r$$"]
  B["$$a+ib = \frac{a+ib}{\sqrt{a^2+b^2}}$$"]
  C["$$a+ib = \frac{a}{\sqrt{a^2+b^2}} + i\frac{b}{\sqrt{a^2+b^2}}$$"]
```

```mermaid
graph LR
  D["$$a+ib = r(cos\theta+i sin\theta)$$"]
  E["$$tan \theta = \frac{b}{a}$$"]
  F["$$\theta = arctan (\frac{b}{a})$$"]
  G["$$a+ib=re^{i\theta}$$"]
```

- polar form
$$a+ib = r(cos\theta+i sin\theta)$$
- exponential form
$$a+ib=re^{i\theta}$$

$$1+i
=\sqrt{2}(cos(\frac{\pi}{4})+i sin(\frac{\pi}{4}))
=\sqrt{2}e^{i\frac{\pi}{4}}$$

$$2\sqrt{2}e^{i\frac{\pi}{4}}$$
$$2\sqrt{2}e^{i\frac{-\pi}{2}}$$
$$2\sqrt{2}e^{i\frac{3\pi}{4}}$$

$$e^{i\frac{\pi}{5}}e^{i\frac{\pi}{3}} = e^{i\frac{8\pi}{15}}$$

### Matricies

$$\begin{bmatrix}1\space -2\\0\space -10\end{bmatrix}$$
$$\begin{bmatrix}1\\2\\-3\\8\end{bmatrix}$$
$$\begin{bmatrix}5\space-2\space3\\7\space2\space1.5\end{bmatrix}$$

#### m x n matrix

$$\begin{bmatrix}1\space -2\space 3\\0\space -10\space 4\\1\space 2\space 3\end{bmatrix}$$

---

$$\begin{pmatrix} 1 & 1 & 2 \\ -1 & 2 & 1 \ \end{pmatrix}$$

$$\text{det} = 1(-1) - (-1)(2) = -1 + 2 = 1$$
