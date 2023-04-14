import bootstrap from 'bootstrap/dist/js/bootstrap.bundle';

export default function createPopover(content) {
  const popover = new bootstrap.Popover(document.querySelector('[data-toggle="popover"]'), {
    placement: 'top',
    content: `${content}`,
    template: '<div class="popover" role="tooltip">'
      + '<h3 class="popover-header"></h3>'
      + '<div class="popover-body"></div></div>',
  });
  return popover;
}
