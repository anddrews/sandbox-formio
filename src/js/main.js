window.onload = function() {
  const node = document.querySelector('#test');
  const {formName, ...additionalData} = node.dataset;
  Formio.createForm(node, `http://localhost:3001/${formName}`, {
    hooks: {
      beforeSubmit: (submission, next) => {
        submission.data = {...submission.data, ...additionalData};

        next();
      }
    }
  })
};
