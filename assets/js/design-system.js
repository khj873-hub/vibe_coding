/* @ds-bundle: {"format":4,"namespace":"ClaudeDesignSystem_040c50","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"TextLink","sourcePath":"components/buttons/TextLink.jsx"},{"name":"CalloutCardCoral","sourcePath":"components/cards/CalloutCardCoral.jsx"},{"name":"CodeWindowCard","sourcePath":"components/cards/CodeWindowCard.jsx"},{"name":"ConnectorTile","sourcePath":"components/cards/ConnectorTile.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"HeroIllustrationCard","sourcePath":"components/cards/HeroIllustrationCard.jsx"},{"name":"ModelComparisonCard","sourcePath":"components/cards/ModelComparisonCard.jsx"},{"name":"PricingTierCard","sourcePath":"components/cards/PricingTierCard.jsx"},{"name":"ProductMockupCardDark","sourcePath":"components/cards/ProductMockupCardDark.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"CookieConsentCard","sourcePath":"components/feedback/CookieConsentCard.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"CtaBand","sourcePath":"components/marketing/CtaBand.jsx"},{"name":"Footer","sourcePath":"components/marketing/Footer.jsx"},{"name":"HeroBand","sourcePath":"components/marketing/HeroBand.jsx"},{"name":"CategoryTab","sourcePath":"components/navigation/CategoryTab.jsx"},{"name":"TopNav","sourcePath":"components/navigation/TopNav.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"ece07c3d85d7","components/buttons/TextLink.jsx":"21ab0db51700","components/cards/CalloutCardCoral.jsx":"902600e30b5d","components/cards/CodeWindowCard.jsx":"61e782e02a5c","components/cards/ConnectorTile.jsx":"8987ab07e3b8","components/cards/FeatureCard.jsx":"9ce5e4352a75","components/cards/HeroIllustrationCard.jsx":"28a2f03be888","components/cards/ModelComparisonCard.jsx":"ec0b7e559a76","components/cards/PricingTierCard.jsx":"738f3d9ea3be","components/cards/ProductMockupCardDark.jsx":"6e6bc29ffb98","components/feedback/Badge.jsx":"3d4c01d5719e","components/feedback/CookieConsentCard.jsx":"7a4c89db5990","components/forms/TextInput.jsx":"94acd3d4c5a5","components/marketing/CtaBand.jsx":"72394aabccc2","components/marketing/Footer.jsx":"afd4859ff38d","components/marketing/HeroBand.jsx":"6df23b8fce88","components/navigation/CategoryTab.jsx":"204ac90c5bae","components/navigation/TopNav.jsx":"78207aa29bd6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClaudeDesignSystem_040c50 = window.ClaudeDesignSystem_040c50 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
const base = {
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-button-size)',
  fontWeight: 'var(--text-button-weight)',
  lineHeight: 'var(--text-button-lh)',
  border: 'none',
  cursor: 'pointer',
  borderRadius: 'var(--radius-md)',
  padding: '12px 20px',
  height: 40,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  onClick
}) {
  const sizePad = size === 'sm' ? {
    height: 32,
    padding: '8px 14px',
    fontSize: 13
  } : {};
  let style = {
    ...base,
    ...sizePad
  };
  if (variant === 'primary') {
    style = {
      ...style,
      background: disabled ? 'var(--coral-disabled)' : 'var(--coral)',
      color: disabled ? 'var(--muted)' : 'var(--on-primary)'
    };
  } else if (variant === 'secondary') {
    style = {
      ...style,
      background: 'var(--canvas)',
      color: 'var(--ink)',
      border: '1px solid var(--hairline)'
    };
  } else if (variant === 'secondary-on-dark') {
    style = {
      ...style,
      background: 'var(--surface-dark-elevated)',
      color: 'var(--on-dark)'
    };
  } else if (variant === 'text-link') {
    style = {
      ...style,
      background: 'transparent',
      color: 'var(--ink)',
      padding: 0,
      height: 'auto'
    };
  } else if (variant === 'icon-circular') {
    style = {
      ...style,
      background: 'var(--canvas)',
      color: 'var(--ink)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-full)',
      width: 36,
      height: 36,
      padding: 0
    };
  }
  return React.createElement('button', {
    style,
    disabled,
    onClick,
    onMouseDown: e => {
      if (variant === 'primary' && !disabled) e.currentTarget.style.background = 'var(--coral-active)';
    },
    onMouseUp: e => {
      if (variant === 'primary' && !disabled) e.currentTarget.style.background = 'var(--coral)';
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/TextLink.jsx
try { (() => {
function TextLink({
  href = '#',
  children
}) {
  return React.createElement('a', {
    href,
    style: {
      color: 'var(--coral)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md-size)',
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.textDecoration = 'underline',
    onMouseLeave: e => e.currentTarget.style.textDecoration = 'none'
  }, children);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/cards/CalloutCardCoral.jsx
try { (() => {
function CalloutCardCoral({
  title,
  ctaLabel = 'Try Claude'
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--coral)',
      color: 'var(--on-primary)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xxl)',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--text-display-sm-size)',
      letterSpacing: 'var(--text-display-sm-ls)'
    }
  }, title), React.createElement('button', {
    style: {
      background: 'var(--canvas)',
      color: 'var(--ink)',
      border: 'none',
      borderRadius: 8,
      padding: '12px 20px',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer',
      whiteSpace: 'nowrap'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { CalloutCardCoral });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CalloutCardCoral.jsx", error: String((e && e.message) || e) }); }

// components/cards/CodeWindowCard.jsx
try { (() => {
function CodeWindowCard({
  filename = 'main.py',
  code = 'def hello():\n    return "Claude"'
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      display: 'flex',
      gap: 6,
      marginBottom: 12
    }
  }, ['#c64545', '#d4a017', '#5db872'].map(c => React.createElement('span', {
    key: c,
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: c
    }
  }))), React.createElement('div', {
    style: {
      background: 'var(--surface-dark-soft)',
      borderRadius: 'var(--radius-sm)',
      padding: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-code-size)',
      color: 'var(--on-dark)',
      whiteSpace: 'pre'
    }
  }, code), React.createElement('div', {
    style: {
      marginTop: 8,
      fontSize: 12,
      color: 'var(--muted-soft)'
    }
  }, filename));
}
Object.assign(__ds_scope, { CodeWindowCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CodeWindowCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ConnectorTile.jsx
try { (() => {
function ConnectorTile({
  name,
  description,
  logo = '●'
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--canvas)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 20,
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 20,
      color: 'var(--coral)',
      marginBottom: 12
    }
  }, logo), React.createElement('div', {
    style: {
      fontSize: 'var(--text-title-sm-size)',
      fontWeight: 500,
      color: 'var(--ink)',
      marginBottom: 4
    }
  }, name), React.createElement('div', {
    style: {
      fontSize: 13,
      color: 'var(--muted)'
    }
  }, description));
}
Object.assign(__ds_scope, { ConnectorTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ConnectorTile.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
function FeatureCard({
  icon = '◆',
  title,
  description
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 20,
      color: 'var(--coral)',
      marginBottom: 16
    }
  }, icon), React.createElement('div', {
    style: {
      fontSize: 'var(--text-title-md-size)',
      fontWeight: 500,
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-md-size)',
      lineHeight: 1.55,
      color: 'var(--body)'
    }
  }, description));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/HeroIllustrationCard.jsx
try { (() => {
function HeroIllustrationCard({
  dark = false,
  children
}) {
  return React.createElement('div', {
    style: {
      background: dark ? 'var(--surface-dark)' : 'var(--canvas)',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      minHeight: 220,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      color: dark ? 'var(--on-dark)' : 'var(--ink)'
    }
  }, children || 'illustration / product mockup');
}
Object.assign(__ds_scope, { HeroIllustrationCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/HeroIllustrationCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ModelComparisonCard.jsx
try { (() => {
function ModelComparisonCard({
  name,
  blurb
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--canvas)',
      border: '1px solid var(--hairline)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--text-display-md-size)',
      letterSpacing: 'var(--text-display-md-ls)',
      color: 'var(--ink)',
      marginBottom: 8
    }
  }, name), React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-md-size)',
      color: 'var(--body)',
      marginBottom: 16
    }
  }, blurb), React.createElement('a', {
    style: {
      color: 'var(--coral)',
      fontSize: 14,
      cursor: 'pointer'
    }
  }, 'Learn more →'));
}
Object.assign(__ds_scope, { ModelComparisonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ModelComparisonCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/PricingTierCard.jsx
try { (() => {
function PricingTierCard({
  name,
  price,
  features = [],
  featured = false
}) {
  const dark = featured;
  return React.createElement('div', {
    style: {
      background: dark ? 'var(--surface-dark)' : 'var(--canvas)',
      border: dark ? 'none' : '1px solid var(--hairline)',
      color: dark ? 'var(--on-dark)' : 'var(--ink)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-title-lg-size)',
      fontWeight: 500,
      marginBottom: 8
    }
  }, name), React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--text-display-sm-size)',
      letterSpacing: 'var(--text-display-sm-ls)',
      marginBottom: 16
    }
  }, price), React.createElement('ul', {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '0 0 20px',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, features.map(f => React.createElement('li', {
    key: f,
    style: {
      fontSize: 'var(--text-body-md-size)',
      color: dark ? 'var(--on-dark-soft)' : 'var(--body)'
    }
  }, '✓ ' + f))), React.createElement(__ds_scope.Button, {
    variant: dark ? 'secondary-on-dark' : 'primary'
  }, 'Get started'));
}
Object.assign(__ds_scope, { PricingTierCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PricingTierCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductMockupCardDark.jsx
try { (() => {
function ProductMockupCardDark({
  title,
  description
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--surface-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-xl)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--on-dark)'
    }
  }, React.createElement('div', {
    style: {
      fontSize: 'var(--text-title-md-size)',
      fontWeight: 500,
      marginBottom: 8
    }
  }, title), React.createElement('div', {
    style: {
      fontSize: 'var(--text-body-md-size)',
      color: 'var(--on-dark-soft)',
      marginBottom: 20
    }
  }, description), React.createElement('div', {
    style: {
      background: 'var(--surface-dark-elevated)',
      borderRadius: 'var(--radius-md)',
      padding: 16,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--on-dark-soft)'
    }
  }, '> claude --agent run'));
}
Object.assign(__ds_scope, { ProductMockupCardDark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductMockupCardDark.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  variant = 'pill',
  children
}) {
  const style = variant === 'coral' ? {
    background: 'var(--coral)',
    color: 'var(--on-primary)',
    fontSize: 'var(--text-caption-upper-size)',
    fontWeight: 500,
    letterSpacing: '1.5px',
    textTransform: 'uppercase'
  } : {
    background: 'var(--surface-card)',
    color: 'var(--ink)',
    fontSize: 'var(--text-caption-size)',
    fontWeight: 500
  };
  return React.createElement('span', {
    style: {
      ...style,
      fontFamily: 'var(--font-sans)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 12px',
      display: 'inline-block'
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/CookieConsentCard.jsx
try { (() => {
function CookieConsentCard({
  onAccept
}) {
  return React.createElement('div', {
    style: {
      position: 'fixed',
      right: 24,
      bottom: 24,
      width: 320,
      background: 'var(--surface-dark)',
      color: 'var(--on-dark)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-lg)',
      fontFamily: 'var(--font-sans)',
      boxShadow: '0 4px 16px rgba(0,0,0,0.2)'
    }
  }, React.createElement('p', {
    style: {
      fontSize: 'var(--text-body-sm-size)',
      lineHeight: 1.5,
      margin: '0 0 12px'
    }
  }, 'We use cookies to improve your experience.'), React.createElement('button', {
    onClick: onAccept,
    style: {
      background: 'var(--coral)',
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      padding: '8px 16px',
      fontSize: 13,
      cursor: 'pointer'
    }
  }, 'Accept'));
}
Object.assign(__ds_scope, { CookieConsentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/CookieConsentCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function TextInput({
  placeholder = '',
  focused = false,
  value,
  onChange
}) {
  return React.createElement('input', {
    placeholder,
    value,
    onChange,
    style: {
      background: 'var(--canvas)',
      color: 'var(--ink)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md-size)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      height: 40,
      boxSizing: 'border-box',
      border: focused ? '1px solid var(--coral)' : '1px solid var(--hairline)',
      boxShadow: focused ? '0 0 0 3px rgba(204,120,92,0.15)' : 'none',
      outline: 'none',
      width: '100%'
    }
  });
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CtaBand.jsx
try { (() => {
function CtaBand({
  variant = 'coral',
  title,
  children
}) {
  const dark = variant === 'dark';
  return React.createElement('div', {
    style: {
      background: dark ? 'var(--surface-dark)' : 'var(--coral)',
      color: dark ? 'var(--on-dark)' : 'var(--on-primary)',
      borderRadius: 'var(--radius-lg)',
      padding: '64px 48px',
      fontFamily: 'var(--font-sans)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 20
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--text-display-sm-size)',
      letterSpacing: 'var(--text-display-sm-ls)'
    }
  }, title), children, React.createElement('button', {
    style: {
      background: dark ? 'var(--coral)' : 'var(--canvas)',
      color: dark ? '#fff' : 'var(--ink)',
      border: 'none',
      borderRadius: 8,
      padding: '12px 20px',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, 'Try Claude'));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/marketing/Footer.jsx
try { (() => {
function Footer() {
  const cols = {
    Product: ['Claude', 'Claude Code', 'Pricing', 'Download'],
    Company: ['About', 'Careers', 'News'],
    Resources: ['Docs', 'Research', 'Blog'],
    Legal: ['Privacy', 'Terms', 'Usage policy']
  };
  return React.createElement('footer', {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--on-dark-soft)',
      padding: '64px 32px',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 20,
      color: 'var(--on-dark)',
      marginBottom: 32
    }
  }, 'Claude'), React.createElement('div', {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, Object.entries(cols).map(([k, v]) => React.createElement('div', {
    key: k
  }, React.createElement('div', {
    style: {
      color: 'var(--on-dark)',
      fontSize: 14,
      fontWeight: 500,
      marginBottom: 12
    }
  }, k), v.map(l => React.createElement('div', {
    key: l,
    style: {
      fontSize: 13,
      marginBottom: 8
    }
  }, l))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// components/marketing/HeroBand.jsx
try { (() => {
function HeroBand({
  title,
  subtitle,
  children
}) {
  return React.createElement('div', {
    style: {
      background: 'var(--canvas)',
      padding: 'var(--space-section) 32px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48,
      alignItems: 'center',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', null, React.createElement('h1', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 'var(--text-display-xl-size)',
      lineHeight: 'var(--text-display-xl-lh)',
      letterSpacing: 'var(--text-display-xl-ls)',
      fontWeight: 400,
      color: 'var(--ink)',
      margin: '0 0 16px'
    }
  }, title), React.createElement('p', {
    style: {
      fontSize: 'var(--text-body-md-size)',
      lineHeight: 1.55,
      color: 'var(--body)',
      margin: '0 0 24px',
      maxWidth: 440
    }
  }, subtitle), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 12
    }
  }, React.createElement('button', {
    style: {
      background: 'var(--coral)',
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      padding: '12px 20px',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, 'Try Claude'), React.createElement('button', {
    style: {
      background: 'var(--canvas)',
      color: 'var(--ink)',
      border: '1px solid var(--hairline)',
      borderRadius: 8,
      padding: '12px 20px',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, 'Learn more'))), children);
}
Object.assign(__ds_scope, { HeroBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/HeroBand.jsx", error: String((e && e.message) || e) }); }

// components/navigation/CategoryTab.jsx
try { (() => {
function CategoryTab({
  active = false,
  children,
  onClick
}) {
  return React.createElement('span', {
    onClick,
    style: {
      display: 'inline-block',
      padding: '8px 14px',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-navlink-size)',
      fontWeight: 500,
      cursor: 'pointer',
      background: active ? 'var(--surface-card)' : 'transparent',
      color: active ? 'var(--ink)' : 'var(--muted)'
    }
  }, children);
}
Object.assign(__ds_scope, { CategoryTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/CategoryTab.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopNav.jsx
try { (() => {
function TopNav({
  items = ['Product', 'Solutions', 'Use Cases', 'Pricing', 'Research', 'Company']
}) {
  return React.createElement('nav', {
    style: {
      height: 64,
      background: 'var(--canvas)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 32px',
      fontFamily: 'var(--font-sans)'
    }
  }, React.createElement('div', {
    style: {
      fontFamily: 'var(--font-serif-display)',
      fontSize: 20,
      color: 'var(--ink)',
      fontWeight: 500
    }
  }, 'Claude'), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 24
    }
  }, items.map(i => React.createElement('span', {
    key: i,
    style: {
      fontSize: 'var(--text-navlink-size)',
      fontWeight: 'var(--text-navlink-weight)',
      color: 'var(--body)',
      cursor: 'pointer'
    }
  }, i))), React.createElement('div', {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, React.createElement('span', {
    style: {
      fontSize: 14,
      color: 'var(--ink)',
      cursor: 'pointer'
    }
  }, 'Sign in'), React.createElement('button', {
    style: {
      background: 'var(--coral)',
      color: '#fff',
      border: 'none',
      borderRadius: 8,
      padding: '10px 18px',
      fontSize: 14,
      fontWeight: 500,
      cursor: 'pointer'
    }
  }, 'Try Claude')));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.CalloutCardCoral = __ds_scope.CalloutCardCoral;

__ds_ns.CodeWindowCard = __ds_scope.CodeWindowCard;

__ds_ns.ConnectorTile = __ds_scope.ConnectorTile;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.HeroIllustrationCard = __ds_scope.HeroIllustrationCard;

__ds_ns.ModelComparisonCard = __ds_scope.ModelComparisonCard;

__ds_ns.PricingTierCard = __ds_scope.PricingTierCard;

__ds_ns.ProductMockupCardDark = __ds_scope.ProductMockupCardDark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.CookieConsentCard = __ds_scope.CookieConsentCard;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.HeroBand = __ds_scope.HeroBand;

__ds_ns.CategoryTab = __ds_scope.CategoryTab;

__ds_ns.TopNav = __ds_scope.TopNav;

})();
