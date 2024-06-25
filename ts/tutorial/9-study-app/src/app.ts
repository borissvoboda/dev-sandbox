// The goal of the class is to get access to the template and form inside of it.
// And to access to the div with id "app".
// Then render template inside the div
// To achieve this: constructor -> access to the template
// The names (this.) "template" and "hostElement" are arbitrary
// The HOST element = where I want to render my content.
// TemplateElement = content itself

class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement; // or HTMLElement
  element: HTMLFormElement;

  constructor() {
    // const templateEl = document.getElementById('project-input');
    // if (template)
    // this.templateElement = <HTMLTemplateElement>document.getElementById('project-input')!;
    this.templateElement = document.getElementById(
      'project-input'
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById('app')! as HTMLDivElement;

    // We have the access to all the elements we need to.

    // RENDERING:
    // document.importNode - method provided on the global document object
    // to import node, you pass a pointer at your TEMPLATE element.content
    // the second argument - it defines whether it should import this with deep clone
    // so with the all levels of nesting

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
  }

  // Now we want to use importet content. For that: A new method:

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}
