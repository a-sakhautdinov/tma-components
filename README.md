# UI library for Telegram Mini Apps

The Component Library tailored for Telegram Mini Apps, leveraging the power of Tailwind CSS. This library offers a collection of sleek and efficient components designed to enhance the user experience within Telegram Mini Apps. With its minimal footprint and seamless integration with Tailwind CSS, it provides developers with the necessary building blocks to create visually appealing and responsive interfaces for Telegram Mini Apps efficiently.
Currently, two official plugins are available:

# Storybook x Chromatic
[Explore and test components here](https://660c465b427aa10ec07b3b1e-dezlszhltr.chromatic.com/?path=/docs/example-mobile--docs)

## Install
```bash
  npm install tma-components
  # or
  yarn add tma-components
```

## Usage
- Add the index.css file to the root of your project.
```tsx
import 'tma-components/dist/index.css'
```

- Import components and use them.
```tsx
import { Button } from 'tma-components'

export function App() {
  
  return <Button variant="plain" label="Awesome" />
}
```

# Implemented
- Button ☑️
- Card ☑️
- Island ☑️
- Layout ☑️
- Quote ☑️
- SideScroll ☑️
- Tabs ☑️
- Tag ☑️
# What next
- Dropdown 🚧
- List 🚧
