export default function(){
  this.transition(
    this.fromRoute('index'),
    this.toRoute('xxx'),
    this.use('toUp'),
    this.reverse('toDown')
  );
}
