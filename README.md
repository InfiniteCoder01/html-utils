# html-utils
A collection of utilities for plain HTML

## Code Block
A simple codeblock using HTML <script> element (because that's the only one which can escape properly)
### Usage
Add this to your head:
```HTML
<script src="https://cdn.jsdelivr.net/gh/InfiniteCoder01/html-utils/built/code-block.js"></script>
```
And make a script element with class "code" (add type="text/plain", so browser won't try to load and execute it as JS):
```HTML
<script type="text/plain" class="code">
  #!/bin/bash

  ###### CONFIG
  ACCEPTED_HOSTS="/root/.hag_accepted.conf"
  BE_VERBOSE=false
  
  if [ "$UID" -ne 0 ]
  then
   echo "Superuser rights required"
   exit 2
  fi
  
  genApacheConf(){
   echo -e "# Host ${HOME_DIR}$1/$2 :"
  }
  
  echo '"quoted"' | tr -d \" > text.txt
</script>
```
Note, that my code block implementation uses [highlight.js](https://highlightjs.org/) to do syntax highlighting.
Add lang attribute to specify language:
```HTML
<script type="text/plain" class="code" lang="js">
  console.log("Some code");
</script>
```
Unfortunately, due to <script>'s nature, you can't put scripts into scripts :(
