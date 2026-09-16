import React, { useRef } from 'react'
import './UserForm.css'

export default function UserForm() {
  const formRef = useRef(null)
  const listRef = useRef(null)
  const emptyMessageRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const nameInput = formRef.current?.elements['name']
    const emailInput = formRef.current?.elements['email']

    if (!nameInput || !emailInput) return

    const name = nameInput.value.trim()
    const email = emailInput.value.trim()

    if (!name || !email) return

    // Hide empty state message in DOM if present
    if (emptyMessageRef.current) {
      emptyMessageRef.current.style.display = 'none'
    }

    // Direct DOM manipulation - create elements without storing data in React state
    const li = document.createElement('li')
    li.className = 'user-item'

    // Avatar bubble
    const avatar = document.createElement('div')
    avatar.className = 'user-avatar'
    avatar.textContent = name.charAt(0).toUpperCase()

    // Details container (Name + Email)
    const details = document.createElement('div')
    details.className = 'user-details'

    const nameEl = document.createElement('span')
    nameEl.className = 'user-name'
    nameEl.textContent = name

    const emailEl = document.createElement('span')
    emailEl.className = 'user-email'
    emailEl.textContent = email

    details.appendChild(nameEl)
    details.appendChild(emailEl)

    // Remove action button
    const deleteBtn = document.createElement('button')
    deleteBtn.className = 'delete-btn'
    deleteBtn.setAttribute('type', 'button')
    deleteBtn.setAttribute('title', 'Remove item')
    deleteBtn.innerHTML = '&times;'
    deleteBtn.onclick = () => {
      li.remove()
      if (listRef.current && listRef.current.children.length === 0 && emptyMessageRef.current) {
        emptyMessageRef.current.style.display = 'block'
      }
    }

    li.appendChild(avatar)
    li.appendChild(details)
    li.appendChild(deleteBtn)

    // Append directly to the DOM list
    listRef.current.appendChild(li)

    // Reset form inputs
    formRef.current.reset()
    nameInput.focus()
  }

  return (
    <div className="form-wrapper">
      <p>get byt text test check </p>
      <div data-testid="paragraph">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aperiam illum voluptates corrupti! Sint fuga sapiente soluta quasi laudantium non! Voluptatibus sapiente nemo aperiam voluptate ab, eius ex aspernatur aliquam. </p>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} className="user-form" id="user-form">
        <div title='get by title this is the form' className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            placeholder="Type your Name"
            required
            autoComplete="name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="e.g. jane@example.com"
            required
            autoComplete="email"
          />
        </div>

        <button type="submit" className="submit-btn" id="submit-btn">
          Submit
        </button>
      </form>

      <div className="list-container">
        <h3 className="list-title">Submitted List</h3>
        <p ref={emptyMessageRef} className="empty-message">
          No items yet. Submit the form to add entries.
        </p>
        <ul ref={listRef} className="user-list" id="user-list"></ul>
      </div>
    </div>
  )
}
