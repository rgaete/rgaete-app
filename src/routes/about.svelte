<svelte:head>
	<title>About</title>
</svelte:head>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
  /* Set height of the grid so .sidenav can be 100% (adjust if needed) */
  .row.content {
    height: 1500px;
  }

  /* Set gray background color and 100% height */
  .sidenav {
    background-color: #f1f1f1;
    height: 100%;
  }

  /* Set black background color, white text and some padding */
  footer {
    background-color: #555;
    color: white;
    padding: 15px;
  }

  /* On small screens, set height to 'auto' for sidenav and grid */
  @media screen and (max-width: 767px) {
    .sidenav {
      height: auto;
      padding: 15px;
    }
    .row.content {
      height: auto;
    }
  }
</style>

<head>
  <title>Bootstrap Example</title>
  
</head>
<body>

  <div class="container-fluid">
    <div class="row content">
      <div class="col-sm-3 sidenav">
        <h4>John's Blog</h4>
        <ul class="nav nav-pills nav-stacked">
          <li class="active">
            <a href="#section1">Home</a>
          </li>
          <li>
            <a href="#section2">Friends</a>
          </li>
          <li>
            <a href="#section3">Family</a>
          </li>
          <li>
            <a href="#section3">Photos</a>
          </li>
        </ul>
        <br />
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Search Blog.." />
          <span class="input-group-btn">
            <button class="btn btn-default" type="button">
              <span class="glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>


  <footer class="container-fluid">
    <p>Footer Text</p>
  </footer>

</body>
