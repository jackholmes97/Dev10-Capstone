# Dev10 Capstone Proposal: HARING
## 1. Problem Statement
Front End Styling and CSS development can be a daunting task for a novice software developer. I remember the feelings frustration and constant confusion I encountered while trying to center my first div. This is why many developers rely on design frameworks to give their web application that polished look that attracts the users attention. But once you feel comfortable in using design frameworks or component libraries, such as Bootstrap, Semantic, and seemingly dominant Material UI (for React), you'll notice a few conceptual flaws. For one, many of these frameworks have near inaccessible default stylings, which can make your designs within these frameworks look "Cookie Cutter" and impersonal. Another issue with design systems, is that there isn't enough emphasis on community and customization. Often times these design systems are intended to be implemented in their default form, which looks great but can wring the creative fun and inspiration out of designing a web application.

## 2. Technical Solution

### Product Qualifiers:
> **1.)** Looks great out-of-the-box<br>
> **2.)** Has accessible CSS/HTML abstraction to encourage easy customization<br>
> **3.)** Front-end developers and web designers can design and publish their own components/elements based off the default stylings.
### Scenario 1
> Justin is a new developer interested in front-end develpment and wants to learn about CSS by building a portfolio site for his resume. Justin creates an account on our site and browses the community and default pages to find design inspiration, documentation on custom element/component styling, and copy-and-paste-able code that increases his excitement about web design and aids in his understanding of CSS/HTML principles through hands-on exploration.

### Scenario 2
> 10 years later, Justis is a Senior Front-end Developer who enjoys working on fun web design projects in his free time. Because of the active community on our site, Justin often returns to HARING now as a poster of fun CSS tips and tricks that hopefully get the next generation of aspiring front-end developers and web designers excited about the craft. 

## 3. Glossary

### HARING
A web design system made for developers of all skill levels that values, simplicity, customization, community and, creativity.

### User
>Anyone who visit the site. Users can casually browse the default components without creating an account but must become a MEMBER (or ADMIN) to access the community page. 

##### Member:
>Contributing or browsing member of the community. Has full CRUD access <em>**for their own submissions only.**</em>

##### Admin:
>A community moderator that ensures that community submissions are supportive, inclusive and, align with HARING's values. Has full CRUD accesss for every community submission.
### Component
>Whether it be a custom submission or one of the pre-styled default components, these are reusable code snippets that include HTML/CSS code block that developers can use for their own projects.

## 4. High Level Requirement

> - Create Submissions ([MEMBER], [ADMIN])
> - Browse Submissions ([MEMBER], [ADMIN])
> - Update Submissions ([MEMBER-Self], [ADMIN-All])
> - Delete Submissions ([MEMBER-Self], [ADMIN-All])
> - Browse About Page & Default Components ([ALL])



## 5. User Stories/Scenarios

### Create Submission
<em>MEMBERS/ADMINS can submit their custom designs.</em>

#### Suggested Data:
> - Title: Name of the template
> - Type: Component Type (must be choosen from the default templates or a possible misc. category)
> - User ID: Poster's User ID (This will be a foreign key)
> - HTML: Stored HTML Implementation
> - CSS: Stored CSS Implementation
> - Description: Themimg, Inspiration, etc. (optional)
> - Demo Link: Possibly a link to a Code Pen or Code Sandbox page for demos (optional)

#### Post-condition: 
>Nothing too restrictive but obviously the USER must become a MEMBER (create an account) to access the community page.

### Edit a Submission
<em>Editing a community design submission.</em>

#### Precondition: 
>USER must be logged in with the MEMBER or ADMIN role.

#### Post-condition: 
>If the USER is logged in as a MEMBER, they can edit their own submissions but no one else's. If the USER is logged in as an ADMIN, they can edit any submission.

### Delete a Submission
<em>Deleting a community design submission.</em>

#### Precondition: 
>USER must be logged in with the MEMBER or ADMIN role. MEMBERS must have contributed at least one submission.

#### Post-condition: 
>If the USER is logged in as a MEMBER, they can delete their own submission but no one else's. If the USER is logged in as an ADMIN, they can delete any submission.

### Browse Defaults:
<em>Viewing the default component templates.</em>

#### Precondition:
>None

#### Filters:
>A Sidebar will be provided for each default template organized by element type (Button, Input Field, etc.).

#### Post-condition: 
>None

### Browse Community:
<em>Viewing MEMBER submissions on the Community Page.</em>

#### Precondition: 
>USER must be logged in with the MEMBER or ADMIN role.

#### Filters:
> - Type: Component type
> - Title: Component template name

#### Post-condition: 
USER is a MEMBER (or ADMIN) of the community.

### Become a Member (Optional)
<em>If a runner enjoys a club's runs, they may wish to join the club. Give them an easy way to apply for membership.</em>

#### Suggested Data:
> - Email
> - Password

#### Precondition: 
>If creating an account, email credentials must be unique

#### Post-condition: 
>None
