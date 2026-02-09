# Project Skills

## SKILL: Styling System

### What You Can Do

Apply Tailwind-inspired utility-first styling with both predefined static utilities and dynamic functions.

### Static Utilities

Pre-defined classes for common patterns.

```tsx
<View style={[styles.flex_1, styles.p_md, styles.rounded_lg, styles.items_center]} />
```

**Available utilities:**

- **Flex:** `flex_1`, `flex_2`, `row`, `column`, `wrap`
- **Alignment:** `justify_center`, `items_center`, `self_start`, etc.
- **Spacing:** `p_md`, `m_lg`, `mt_sm`, `px_md` (xs, sm, md, lg, xl sizes)
- **Borders:** `rounded_md`, `border_1`, `border_t_1`
- **Gaps:** `gap_sm`, `gap_lg`

### Dynamic Functions

Custom values for non-standard spacing/sizing.

```tsx
<View style={styles.p(17)} />
<View style={[styles.w(100), styles.h(50)]} />
<View style={styles.bg('#FF5733')} />
```

**Functions:**

- **Spacing:** `p()`, `px()`, `py()`, `pt()`, `pb()`, `pl()`, `pr()`, `m()`, `mx()`, `my()`, `mt()`, `mb()`, `ml()`, `mr()`
- **Sizing:** `w()`, `h()`, `size()`
- **Colors:** `bg()`, `color()`, `borderColor()`
- **Radius:** `rounded()`
- **Font:** `font()` (bold, semibold, medium, regular, light)

### Device Scaling

Use `scaler` for responsive values based on screen dimensions.

```tsx
import { scaler } from './index';

width: scaler.width(50),  // 50% of screen width
height: scaler.height(30) // 30% of screen height
```

### How to Use

- **Combine utilities:** `style={[styles.flex_1, styles.p(12)]}`
- **Mix static + dynamic:** Static for standard, dynamic for custom
- **Dynamic styles cache automatically**
- **Responsive:** Use percentages or `scaler` for adapting to devices
