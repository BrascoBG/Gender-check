function age([a,b]){
  let ages = Number(a);
  let sex = b;

  if(ages < 16){
    if(sex === 'm'){
      console.log('Master');
    }
    else if(sex === 'f'){
      console.log('Miss');
    }
  }
  else if(ages > 16){
      if(sex === 'm'){
        console.log('Mister');
      }
      else if(sex === 'f'){
        console.log('Missis');
      }
  }
}

age([15,'m']);
