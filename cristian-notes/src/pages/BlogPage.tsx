const BlogPage = () => {
  return (
    <main>
      <section className="blog-page-section">
        <aside style={{ flex: 1 }}>
          <div className="blog-page-one">Cristian Nass Blog</div>
          <div className="blog-page-two"></div>
        </aside>
        <aside style={{ flex: 3, textAlign: 'left' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <h2>Title: 'Details'</h2>
            <h5>Category: HTML</h5>
          </div>
          <p style={{ fontSize: '1.2rem' }}>
            The datalist HTML element contains a set of option elements that
            represent the permissible or recommended options available to choose
            from within other controls.
          </p>
          <p style={{ fontSize: '1rem', color: 'gray', fontStyle: 'italic' }}>
            example Link:{' '}
            <a href="https://www.w3schools.com/tags/tag_datalist.asp">
              https://www.w3schools.com/tags/tag_datalist.asp
            </a>
          </p>
        </aside>
      </section>
    </main>
  );
};
export default BlogPage;
