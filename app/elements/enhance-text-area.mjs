export default function TextArea({ html, state }) {
  const { attrs={} } = state
  const {
    description='',
    errors='',
    form='',
    id='',
    label='',
    maxlength='',
    minlength='',
    name='',
    placeholder='',
    value='',
    rows='5',
    cols='20'
  } = attrs

  const booleanAttr = (attrs, attr) => Object.keys(attrs).includes(attr) ? attr : ''

  const autocomplete = booleanAttr(attrs, 'autocomplete')
  const autofocus = booleanAttr(attrs, 'autofocus')
  const disabled = booleanAttr(attrs, 'disabled')
  const readonly = booleanAttr(attrs, 'readonly')
  const required = booleanAttr(attrs, 'required')

  return html`
  <style>
    :host label textarea {
      background-color: var(--light);
      border-color: var(--grey-300);
    }
    :host label textarea:focus {
      outline: none;
      border-color: var(--grey-700);
      transition: border-color 0.15s ease-in;
    }
    :host .errors {
      color: var(--error-500);
      border-color: var(--error-500);
    }
    :host p:not(.errors) {
      color: var(--muted)
    }
  </style>
  <label
    for="${name}"
    class="radius0"
  >
    <div class="mb-3 ${errors ? 'errors' : ''}">
      ${label}
    </div>
    <textarea
      class="p-2 flex-grow w-full font-light text0 radius0 border-solid mb-2 border1 select-none ${errors ? 'errors' : ''}"
      ${form ? `form="${form}"` : ''}
      ${id ? `id="${id}" name="${id}"` : ''}
      ${maxlength ? `maxlength="${maxlength}"` : ''}
      ${minlength ? `minlength="${minlength}"` : ''}
      ${placeholder ? `placeholder="${placeholder}"` : ''}
      ${autocomplete ? 'autocomplete' : ''}
      ${autofocus ? 'autofocus' : ''}
      ${disabled ? 'disabled' : ''}
      ${readonly ? 'readonly' : ''}
      ${required ? 'required' : ''}
      rows="${rows}"
      cols="${cols}"
     >${value}</textarea>
     ${errors ? `<p class="mb-3 errors">
  ❌ ${errors}
  </p>` : ''}
    ${description ? `<p class="mb-2 text-1">
  ${description}
  </p>` : ''}
  </label>
    `
}
