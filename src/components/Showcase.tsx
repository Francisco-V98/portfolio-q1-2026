
export default function Showcase() {
    return (
        <section style={{ padding: '4rem 0', minHeight: '100vh' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Selected Works</h2>
                <div style={{ display: 'grid', gap: '2rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <div style={{ height: '300px', background: '#222', borderRadius: '12px' }}></div>
                    <div style={{ height: '300px', background: '#222', borderRadius: '12px' }}></div>
                    <div style={{ height: '300px', background: '#222', borderRadius: '12px' }}></div>
                </div>
            </div>
        </section>
    );
}
