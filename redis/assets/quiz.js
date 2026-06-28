/* Shared quiz widget for Redis lessons.
   Markup contract:
     <div class="quiz" data-answer="B">
       <div class="q">Question…</div>
       <div class="scenario">Optional scenario text…</div>
       <button class="opt" data-key="A">…</button>
       <button class="opt" data-key="B">…</button>
       <div class="explain">Why B is right and the others are traps…</div>
     </div>
   On click: marks chosen + correct option, reveals explanation. Retrieval-first:
   the explanation stays hidden until the learner commits to an answer. */
document.addEventListener('click', function (e) {
  var opt = e.target.closest('.opt');
  if (!opt) return;
  var quiz = opt.closest('.quiz');
  if (!quiz || quiz.dataset.done === 'true') return;

  var answer = quiz.dataset.answer;
  var chosen = opt.dataset.key;

  quiz.querySelectorAll('.opt').forEach(function (o) {
    o.disabled = true;
    if (o.dataset.key === answer) o.classList.add('correct');
  });
  if (chosen !== answer) opt.classList.add('wrong');

  var explain = quiz.querySelector('.explain');
  if (explain) explain.classList.add('show');
  quiz.dataset.done = 'true';
});
