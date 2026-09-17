import React, { useState } from 'react';

const Form: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted data:', inputValue);
  };

  return (
    <div style={{ margin: '20px 0', padding: '16px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="user-input" style={{ display: 'block', marginBottom: '6px', fontWeight: 'bold' }}>
            Enter Text:
          </label>
          <input
            id="user-input"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type something..."
            style={{
              padding: '8px 12px',
              fontSize: '14px',
              borderRadius: '4px',
              border: '1px solid #aaa',
              width: '100%',
              maxWidth: '300px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Real-time display below the field */}
        <div style={{ margin: '10px 0', minHeight: '24px' }}>
          <h2>Live Preview: <span data-testid="live-preview">{inputValue}</span></h2>
        </div>

        <button
          type="submit"
          style={{
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
