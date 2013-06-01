Templates for QNN Agent Sites
=============================

This repository contains template source code of QNN agent site.

Configurations here contain all default values and they may be succeeded or overrode by:  
[Configurations for each site](https://github.com/qnn/qnn-agent-sites)

How to use
----------

The web page generation process may take some time. Here is how you can save most of the time:

If you are not going to edit web page besides product's details page, make ``_layout_*/product-details.html`` blank first. Then run following command to watch generated web page while editing them. When you finish editing, revert changes on ``product-details.html``.

    jekyll serve --watch

If you are going to edit product's details page, move most of the products out of the ``products`` category to somewhere else. Move them back when you finish editing.

Note: You need to re-run the ``jekyll serve --watch`` command if you made changes on ``_config.yml`` or plugins in ``_plugins`` directory.

Requirements
------------

* Jekyll 1.0+

Copyright
---------

Web design by caiguanhao.  
Copyright (C) 2013 caiguanhao.  
Powered by Jekyll, the blog-aware, static site generator in Ruby.

Developer
---------

* caiguanhao
