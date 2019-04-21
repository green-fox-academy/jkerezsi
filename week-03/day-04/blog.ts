'use strict';


class BlogPost {
    authorName: string;
    title: string;
    text: string;
    publicationDate: string;

    constructor (authorName: string, title: string, text: string, publicationDate: string) {
        this.authorName = authorName;
        this.title = title;
        this.text = text;
        this.publicationDate = publicationDate;
    }
    createNewBlogPost(): void {
        console.log(`${this.title} titled by ${this.authorName} posted at ${this.publicationDate} \n ${this.text}`)
    }
}



class Blog{
    blogList: BlogPost [];

    constructor(bloglist: any) {
        this.blogList = bloglist;
    }
    
    delete(index: number) {
        this.blogList.splice(index,1);
        return this.blogList;
    }
    update(index: number,post: BlogPost) {
        this.blogList[index].text = post.text
        this.blogList[index].title = post.title
        this.blogList[index].publicationDate = post.publicationDate
        this.blogList[index].authorName = post.authorName
            }
    }
    
    const firstAuthor: BlogPost = new BlogPost('John Doe', 'Lorem Ipum', 'Lorem ipsum dolor sit amet.', '2010.05.04');
    const secondAuthor: BlogPost = new BlogPost('Tim Urban', 'Whait but why Ipum', 'A popular long-form, stick-figure-illustrated blog about almost everything.', '2010.10.10');
    const thirdAuthor: BlogPost = new BlogPost('Willieam Turton', 'One Engineer is Trying to Get IBM to Reckon With Trump', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', '2017.03.28');
    
    let myNewBlog = new Blog([firstAuthor,secondAuthor,thirdAuthor]);

    // firstAuthor.createNewBlogPost();
    // secondAuthor.createNewBlogPost();
    // thirdAuthor.createNewBlogPost();
    
    console.log(myNewBlog);
    
myNewBlog.delete(0);

console.log(myNewBlog);