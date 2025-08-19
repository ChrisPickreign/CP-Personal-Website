export default function Footer() {
  return (
    <footer style={{ width: '100vw', background: '#171717', color: '#ededed', textAlign: 'center', padding: '1rem 0', borderTop: '1px solid #333', position: 'fixed', bottom: 0, left: 0 }}>
      <span>&copy; {new Date().getFullYear()} Chris Pickreign. All rights reserved.</span>
    </footer>
  );
}
