import './styles.css'

const root = document.getElementById('app')

root.innerHTML = `
  <header class="app-header">
    <h1 class="app-title">App is running</h1>
  </header>
  <main class="app-main">
    <p class="app-description">Welcome! This starter is ready.</p>
  </main>
`

if (import.meta.hot) {
  import.meta.hot.accept()
}
