// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
		<div class="col-sm-9">
        <h4>
          <small>RECENT POSTS</small>
        </h4>
        <hr />
        <h2>I Love Food</h2>
        <h5>
          <span class="glyphicon glyphicon-time" />
          Post by Jane Dane, Sep 27, 2015.
        </h5>
        <h5>
          <span class="label label-danger">Food</span>
          <span class="label label-primary">Ipsum</span>
        </h5>
        <br />
        <p>
          Food is my passion. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat.
        </p>
        <br />
        <br />

        <h4>Leave a Comment:</h4>
        <form role="form">
          <div class="form-group">
            <textarea class="form-control" rows="3" required />
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
        <br />
        <br />

        <p>
          <span class="badge">2</span>
          Comments:
        </p>
        <br />

        <div class="row">
          <div class="col-sm-2 text-center">
            <img
              src="bandmember.jpg"
              class="img-circle"
              height="65"
              width="65"
              alt="Avatar" />
          </div>
          <div class="col-sm-10">
            <h4>
              Anja
              <small>Sep 29, 2015, 9:12 PM</small>
            </h4>
            <p>
              Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <br />
          </div>
          <div class="col-sm-2 text-center">
            <img
              src="bird.jpg"
              class="img-circle"
              height="65"
              width="65"
              alt="Avatar" />
          </div>
          <div class="col-sm-10">
            <h4>
              John Row
              <small>Sep 25, 2015, 8:25 PM</small>
            </h4>
            <p>
              I am so happy for you man! Finally. I am looking forward to read
              about your trendy life. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <br />
            <p>
              <span class="badge">1</span>
              Comment:
            </p>
            <br />
            <div class="row">
              <div class="col-sm-2 text-center">
                <img
                  src="bird.jpg"
                  class="img-circle"
                  height="65"
                  width="65"
                  alt="Avatar" />
              </div>
              <div class="col-xs-10">
                <h4>
                  Nested Bro
                  <small>Sep 25, 2015, 8:28 PM</small>
                </h4>
                <p>Me too! WOW!</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://zeit.co'>Zeit</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
