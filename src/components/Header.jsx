function Header({ title }) {
  return (
    <header>
      <div className='container'>
        <h2>{title}</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'Feedback UI',
};

export default Header;
