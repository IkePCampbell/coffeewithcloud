import blog1 from './blogs/blog1.md'
import blog2 from './blogs/blog2.md'
import blog3 from './blogs/blog3.md'
import blog4 from './blogs/blog4.md'
export const blogs = [
{
    id : '0',
    tags: 'Intro, Test Blog',
    name: '\'\'Hello World\'\'',
    date: '09-04-2020',
    author: 'Isaac Campbell',
    teaser: 'Origin Story',
    source: blog1,
    ending: ''
  },
  {
    id : '1',
    tags: 'Education, Tools, Git, Docker, Jenkins',
    name: 'Three tools to use while coding in college',
    date: '09-16-2020',
    author: 'Isaac Campbell',
    teaser: 'Or: \'\'How to impress your professors and classmates while also getting some industry experience\'\' ',
    source: blog2,
    ending:'Do you agree with my list? What tools do you use that I didn\'t put on this one? What tools are you curious about but just aren\'t sure how to get started? I\'d love to hear your top tools that you use in your studies!'
  },
  {
    id : '2',
    tags: 'Python, Programming',
    name: 'Basic Method Chaining Using Python',
    date: '09-22-2020',
    author: 'Isaac Campbell',
    teaser: 'Ever wanted to know what method chaining is? Here is a pracical example of it in Python!',
    source: blog3,
    ending:'So what did you think? Pretty simple. Try adding Two(), Subtract(), and a few more methods! I hope you enjoyed it!'
  },
  {
    id : '3',
    tags: 'Python, Game Development, Neural Network',
    name: 'Neural Networks and Othello',
    date: '09-28-2020',
    author: 'Isaac Campbell',
    teaser: 'This project took me over a year to finally complete. Want to see how a Neural Network will make choices in Catan.',
    source: blog4,
    ending:''
  }


]