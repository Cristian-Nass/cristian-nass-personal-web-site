import useDataBlogStore from '../store/useDataBlogStore';
const BlogPage = () => {
  const { dataBlog } = useDataBlogStore();
  console.log(dataBlog);
  return (
    <main>
      <section className="blog-page-section">
        <aside style={{ flex: 1 }}>
          <div className="blog-page-one">Cristian Nass Blog</div>
          <div className="blog-page-two"></div>
        </aside>
        <aside style={{ flex: 3, textAlign: 'left' }} >
          {dataBlog.map((item) => (
            <div style={{ flex: 3, textAlign: 'left' }} key={item.id}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <h2>Title: {item.title}</h2>
                <h5>Category: {item.category}</h5>
              </div>
              <p style={{ fontSize: '1.2rem' }}>
                {item.description}
              </p>
              <p style={{ fontSize: '1rem', color: 'gray', fontStyle: 'italic' }}>
                example Link:{' '}
                <a href={item.example_link}>
                  {item.example_link}
                </a>
              </p>
              <p style={{ fontSize: '14px', color: 'gray', fontStyle: 'italic', textAlign: 'right' }}>Posted by: {item.posted_by}, at: {item.created_at}</p>
            </div>
          ))}
        </aside>
      </section>
    </main>
  );
};
export default BlogPage;
