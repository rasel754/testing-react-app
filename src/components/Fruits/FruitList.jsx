import React, { useState } from 'react'
import './FruitList.css'

export default function FruitList({
  fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes'],
  errorMessage = null,
  showSpecialOffer = false,
}) {
  const [selectedFruit, setSelectedFruit] = useState(null)
  const [showBonus, setShowBonus] = useState(false)

  return (
    <div className="fruit-container" data-testid="fruit-container">
      <div className="fruit-header">
        <h2 className="fruit-title">Fresh Fruits</h2>
        <span className="fruit-count-badge">Total: {fruits.length}</span>
      </div>

      {/* Conditionally rendered error message - great for testing queryBy() when null */}
      {errorMessage && (
        <div className="fruit-error" role="alert">
          {errorMessage}
        </div>
      )}

      {/* Conditionally rendered special offer banner - great for testing queryBy() */}
      {showSpecialOffer && (
        <div className="special-offer" data-testid="special-offer">
          🎉 Special Offer: 20% off all fruits today!
        </div>
      )}

      {/* Multiple elements list - great for testing getAllByRole('listitem') */}
      {fruits.length > 0 ? (
        <ul className="fruit-list" aria-label="fruit-list">
          {fruits.map((fruit, index) => (
            <li
              key={index}
              className={`fruit-item ${selectedFruit === fruit ? 'active' : ''}`}
              data-testid="fruit-item"
            >
              <span className="fruit-name">{fruit}</span>
              <button
                type="button"
                className="fruit-select-btn"
                onClick={() => setSelectedFruit(fruit)}
                aria-label={`Select ${fruit}`}
              >
                {selectedFruit === fruit ? 'Selected' : 'Select'}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        /* Empty state - great for testing queryByText('No fruits available') */
        <p className="no-fruits-msg">No fruits available</p>
      )}

      {/* Dynamic selection text - testable with queryBy */}
      {selectedFruit && (
        <div className="selected-info">
          You selected: <strong>{selectedFruit}</strong>
        </div>
      )}

      {/* Bonus toggle section */}
      <div className="fruit-actions">
        <button
          type="button"
          className="toggle-bonus-btn"
          onClick={() => setShowBonus((prev) => !prev)}
        >
          {showBonus ? 'Hide Bonus Item' : 'Show Bonus Item'}
        </button>
      </div>

      {/* Bonus item conditional rendering */}
      {showBonus && (
        <div className="bonus-item" data-testid="bonus-item">
          ✨ Bonus: Dragon Fruit
        </div>
      )}
    </div>
  )
}
