function Header({ title, bgColor, textColor }) {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className='container'>
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#EC1957',
};

export default Header;
