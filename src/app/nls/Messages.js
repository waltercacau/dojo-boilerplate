console.log('Hey, look which define function I have access to:', define.toString())
define({
  root: {
    title: 'Hello World',
    content: 'Loaded successfully!',
  },
  'pt-br': true
});
