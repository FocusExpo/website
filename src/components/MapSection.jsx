import React from 'react';

const MapSection = () => {
    return (
        <section className="section">
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ marginBottom: '2rem' }}>Location</h2>
                <p style={{ marginBottom: '2rem', fontSize: '1.25rem', color: 'var(--color-primary)' }}>Moscone Center, San Francisco, CA</p>
                <div style={{
                    height: '400px',
                    background: 'var(--color-surface)',
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>Interactive Map Loading...</p>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
