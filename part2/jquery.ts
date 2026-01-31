// removeClass(className_function?: JQuery.TypeOrArray<string> | ((this: TElement, index: number, className: string) => string),): this;
$('p').removeClass(['myClass', 'noClass']).addClass('yourClass');

$(['p', 't']).text('hello');

const tag = $('ul li')
  .addClass('hello')
  .addClass(function (index) {
    return 'item-' + index;
  });

$(tag).html(function (i: number) {
  console.log(this);
  return $(this).data('name') + '입니다.';
});

// jquery 타입 직접 만들어보기
interface AwesomeQuery<T> {
  text(
    arg1?:
      | number
      | string
      | ((this: T, index: number) => number | string | boolean)
  ): this;
  html(arg1: string | Document | DocumentFragment): this;
}

const $tag: AwesomeQuery<HTMLElement> = $(
  'p'
) as unknown as AwesomeQuery<HTMLElement>;

$tag.text('123');
$tag.text(123);
$tag.text(function (index) {
  console.log(this);
  return true;
});
$tag.text().html(document);
