# Web Who Size

A lightweight, responsive web tool designed to help developers and designers visualize, test, and preview exact element dimensions in real-time. Built with pure HTML/JavaScript and styled using Tailwind CSS v4, featuring a completely serverless standalone CLI build workflow via GitHub Actions.

## 🚀 Performance & Core Web Vitals

Проект развернут на GitHub Pages и оптимизирован для максимальной скорости работы без лишнего клиентского JavaScript. Метрики по результатам контрольного замера продакшена (Chrome DevTools):

| Метрика | Значение | Оценка |
| --- | --- | --- |
| **Largest Contentful Paint (LCP)** | 0.46s | Отлично |
| **Cumulative Layout Shift (CLS)** | 0.00 | Идеально |
| **Interaction to Next Paint (INP)** | 16ms | Отлично |

![LCP](https://img.shields.io/badge/LCP-0.46s-brightgreen?style=flat-square&logo=googlechrome)
![CLS](https://img.shields.io/badge/CLS-0.00-brightgreen?style=flat-square&logo=googlechrome)
![INP](https://img.shields.io/badge/INP-16ms-brightgreen?style=flat-square&logo=googlechrome)

## Features

* **Real-Time Dimension Control:** Adjust element width and height instantly using interactive range sliders or precise text inputs.
* **Draggable Preview Box:** Freely drag and position the preview element across the screen to test layouts and spacing.
* **Background Upload:** Upload local background images (`JPG`, `PNG`, etc.) to preview how UI components look over custom backgrounds.
* **Fully Automated CI/CD:** Zero-config deployment using GitHub Actions that downloads Tailwind CLI, compiles styles on the fly, and deploys directly to GitHub Pages.

## Project Structure

```text
.
├── .github/workflows/deploy-page.yml  # GitHub Actions CI/CD pipeline
├── index.html                         # Main application markup & inline script logic
├── input.css                          # Tailwind CSS entry point
├── output.css                         # Compiled & minified production stylesheet (auto-generated)
├── LICENSE                            # Project license
└── README.md                          # Project documentation

```

## Local Development & Build

To compile the styles locally using the standalone Tailwind CSS CLI:

1. Download the Tailwind CLI binary for your OS from the official releases.
2. Run the build command to compile `input.css` into `output.css`:
```bash
./tailwindcss-linux-x64 -i input.css -o output.css --minify

```
3. Open `index.html` directly in your browser or serve it via a local static server.

---

## Disclaimer & License

* **Short Disclaimer (EN)**: Materials are provided ***as is*** under the LICENSE file. No warranties. Authors are not liable for damages. No partnership or obligations created.
* **Short Disclaimer (RU)**: Материалы предоставляются ***как есть*** и регулируются файлом LICENSE. Гарантий нет. Автор(ы) не несут ответственности за убытки. Партнёрство или обязательства не создаются.
* **Full Disclaimer**: Read the full text in the [DISCLAIMER](https://www.google.com/search?q=./DISCLAIMER.md) (Available in EN/RU).
* **License**: This project is dual-licensed:
* **Open Source**: Licensed under the [GNU AGPLv3](https://www.google.com/search?q=./LICENSE).
* **Commercial**: A separate proprietary commercial license is required for proprietary, closed-source, or enterprise use that does not comply with AGPLv3 terms. Contact the copyright holder for commercial licensing.



## Author & Contacts

* **GitHub**: [@my-app-s](https://github.com/my-app-s)
* **LinkedIn**: [In/my-app-s](https://www.linkedin.com/in/my-app-s)
* **Mail**: [myapps.mre.dev@gmail.com](https://www.google.com/search?q=mailto%3Amyapps.mre.dev%40gmail.com)
