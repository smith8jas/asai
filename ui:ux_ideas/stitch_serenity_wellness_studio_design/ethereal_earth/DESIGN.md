# Design System Document: The Breath of Design

## 1. Overview & Creative North Star: "The Organic Sanctuary"
This design system moves away from the rigid, boxed-in layouts of traditional web design to embrace **The Organic Sanctuary**. The goal is to replicate the physical experience of entering a high-end yoga studio: the smell of eucalyptus, the warmth of natural light, and the immense sense of "breath."

We achieve this through **Intentional Asymmetry** and **Tonal Depth**. Instead of standard grids, we use overlapping elements and expansive white space (whitespace is not "empty," it is "breath"). By layering surfaces rather than drawing lines, the UI feels like silk and paper—tactile, premium, and calm.

## 2. Color & Surface Philosophy
The palette is rooted in the earth. We use a "High-End Editorial" approach where color is used to guide the eye, not to shout.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions. 
*   **Example:** A `surface-container-low` section sitting on a `surface` background.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of handmade paper.
*   **Layering:** Use `surface-container` tiers (Lowest to Highest) to create depth. 
*   **The Glass & Gradient Rule:** For floating elements (modals or navigation), use Glassmorphism. Apply semi-transparent `surface` colors with a 20px-40px `backdrop-blur`. 
*   **Signature Textures:** For Hero CTAs, utilize a subtle linear gradient from `primary` (#56642B) to `primary-container` (#8A9A5B) at a 135-degree angle to provide a "soulful" shimmer.

| Token | Value | Role |
| :--- | :--- | :--- |
| `primary` | #56642B | Brand essence, high-intent actions. |
| `primary-container` | #8A9A5B | Sage green; soft accents and organic shapes. |
| `surface` | #FAF9F6 | The base canvas; off-white "air." |
| `surface-container-low` | #F4F3F1 | Sub-sectioning and card backgrounds. |
| `tertiary` | #725A39 | Earthy grounding; used for fine metadata or secondary accents. |

## 3. Typography: The Editorial Voice
Our typography balances the authority of a serif with the modern clarity of a geometric sans-serif.

*   **Display & Headlines (Noto Serif):** These are our "meditative" anchors. Use `display-lg` for hero moments with generous letter spacing (-0.02em) to evoke an editorial magazine feel.
*   **Body & Titles (Manrope):** Chosen for its clean, open apertures. It ensures that even at small sizes, the "calm" is maintained through legibility.

| Level | Token | Font | Size | Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Noto Serif | 3.5rem | 400 |
| **Headline** | `headline-md` | Noto Serif | 1.75rem | 500 |
| **Title** | `title-lg` | Manrope | 1.375rem | 600 |
| **Body** | `body-lg` | Manrope | 1.0rem | 400 |
| **Label** | `label-md` | Manrope | 0.75rem | 500 (Caps) |

## 4. Elevation & Depth: Tonal Layering
We reject the "drop shadow" of 2010. We use light and layering to create a sense of presence.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a "soft lift" that feels architectural rather than digital.
*   **Ambient Shadows:** If an element must float (e.g., a booking modal), use an ultra-diffused shadow: `box-shadow: 0 20px 40px rgba(26, 28, 26, 0.05)`. The shadow color is a tint of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If accessibility requires a stroke, use `outline-variant` at 15% opacity. Never use 100% opaque borders.
*   **Roundedness:** Use the `xl` (1.5rem) scale for cards and `full` for buttons to mimic smooth, river-washed stones.

## 5. Components & Interface Elements

### Buttons: The Tactile Interaction
*   **Primary:** `primary` background, `on-primary` text. Shape: `full` (pill). No shadow; instead, a subtle scale-up (1.02) on hover.
*   **Secondary:** `surface-container-highest` background. Soft and approachable.
*   **Tertiary (Ghost):** No background. `primary` text. Used for low-emphasis navigation or "Cancel" actions.

### Cards (Service & Testimonials)
*   **Instruction:** Forbid the use of divider lines.
*   **Service Cards:** Use `surface-container-low` backgrounds with `xl` (1.5rem) corner radius. Use high-quality imagery that overlaps the card boundary by -20px to create a 3D "layered" effect.
*   **Testimonial Cards:** Use `notoSerif` for the quote text. Place the avatar in a `full` circle. Use `surface-container-lowest` to make the testimonial "pop" against a `surface` background.

### Form Elements
*   **Inputs:** Use `surface-container-low` with a bottom-only `outline` at 20% opacity. When focused, transition to a `primary` 2px bottom border. This mimics high-end stationery.
*   **Checkboxes/Radios:** Use `primary` for the selected state. Ensure the "checkmark" is `on-primary`.

### Specialized Wellness Components
*   **The Schedule Slider:** An asymmetric horizontal scroll of classes. Use `surface-container-high` for the current day to provide a "focal point."
*   **Breath Indicator:** A soft, pulsing `primary-container` circle behind key CTAs to draw the eye without using jarring motion.

## 6. Do’s and Don’ts

### Do:
*   **Use Asymmetry:** Place images slightly off-center or overlapping text blocks to create a custom, high-end feel.
*   **Embrace Margin:** If you think there is enough space, add 16px more. Space is the luxury of this system.
*   **Tonal Shifts:** Use background color changes to signal a new section of content rather than a line.

### Don't:
*   **Don't use pure black (#000):** It is too harsh. Use `on-surface` (#1A1C1A).
*   **Don't use hard corners:** Every element should feel safe and soft. Stick to `md` (0.75rem) minimum.
*   **Don't use standard grids:** Avoid a "3-column block" look. Vary the widths of columns (e.g., 40/60) to keep the layout dynamic and editorial.