import { useParams, Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPost, getRelatedPosts } from "@/data/blogPosts";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | New Star Construction`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription);
      }

      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', post.keywords.join(', '));
      } else {
        const newMetaKeywords = document.createElement('meta');
        newMetaKeywords.name = 'keywords';
        newMetaKeywords.content = post.keywords.join(', ');
        document.head.appendChild(newMetaKeywords);
      }
    }

    return () => {
      document.title = 'New Star Construction - Building Excellence in Pondicherry';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'New Star Construction offers 25+ years of quality construction services in Pondicherry. Specializing in building construction, renovation, architecture design, and interior solutions.');
      }
    };
  }, [post]);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Header />
      
      <article className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/90 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mb-8">
            <div className="mb-4">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>

            <p className="text-xl text-muted-foreground">
              {post.excerpt}
            </p>
          </header>

          {/* Article Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none prose-headings:text-secondary prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:mb-4 prose-ul:mb-4 prose-li:text-muted-foreground prose-strong:text-foreground">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return <h1 key={index} className="text-4xl font-bold text-secondary mt-8 mb-6">{paragraph.substring(2)}</h1>;
                } else if (paragraph.startsWith('## ')) {
                  return <h2 key={index} className="text-3xl font-bold text-secondary mt-12 mb-6">{paragraph.substring(3)}</h2>;
                } else if (paragraph.startsWith('### ')) {
                  return <h3 key={index} className="text-2xl font-bold text-secondary mt-8 mb-4">{paragraph.substring(4)}</h3>;
                } else if (paragraph.startsWith('#### ')) {
                  return <h4 key={index} className="text-xl font-bold text-secondary mt-6 mb-3">{paragraph.substring(5)}</h4>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index} className="font-bold text-foreground mb-4">{paragraph.slice(2, -2)}</p>;
                } else if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-muted-foreground ml-6 mb-2">
                      {paragraph.substring(2)}
                    </li>
                  );
                } else if (paragraph.startsWith('*') && paragraph.endsWith('*')) {
                  return <p key={index} className="italic text-muted-foreground mb-4">{paragraph.slice(1, -1)}</p>;
                } else if (paragraph.includes('**')) {
                  const parts = paragraph.split('**');
                  return (
                    <p key={index} className="text-muted-foreground mb-4">
                      {parts.map((part, i) => 
                        i % 2 === 0 ? part : <strong key={i} className="text-foreground font-semibold">{part}</strong>
                      )}
                    </p>
                  );
                } else if (paragraph.trim() === '') {
                  return <div key={index} className="h-4" />;
                } else if (paragraph.trim().startsWith('---')) {
                  return <hr key={index} className="my-8 border-border" />;
                } else {
                  return <p key={index} className="text-muted-foreground mb-4">{paragraph}</p>;
                }
              })}
            </div>
          </div>

          {/* CTA Box */}
          <div className="max-w-4xl mx-auto mt-12 bg-primary/10 border-2 border-primary rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-secondary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Get expert consultation from our experienced team with 25+ years in construction
            </p>
            <Link to="/#contact">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Contact Us Today
              </Button>
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="max-w-6xl mx-auto mt-16">
              <h2 className="text-3xl font-bold text-secondary mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="bg-card rounded-lg shadow-card overflow-hidden hover:shadow-elegant transition-shadow duration-300"
                  >
                    <div className="aspect-video bg-muted">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-secondary mb-2 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-primary mt-3 text-sm font-semibold">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
