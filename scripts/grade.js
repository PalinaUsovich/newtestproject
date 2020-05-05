function calculateStudentGrade (score,totalPossibleSCore) {
    let grade;
    
  
    let scorePercentage = score * 100/totalPossibleSCore;

    if (scorePercentage >=0 && scorePercentage<=59) {
        grade = 'F';

    }else if (scorePercentage >= 60 && scorePercentage <= 69) {
        grade = 'D';
    }else if (scorePercentage >=70 && scorePercentage <=79) {
        grade = 'C';

    }else if (scorePercentage >= 80 && scorePercentage <= 89){
        grade = 'B';
    
    }else if (scorePercentage >= 90 && scorePercentage <=100){
        grade = 'A';

    }else {
        grade = 0;
    }

    if (grade!==0){
        console.log(`your grade is ${grade} , is ${scorePercentage}%`);
    }else{
        console.log(`Invalid number`)
    }
    return {grade: grade, scorePercentage: scorePercentage};
    

}
//calculateStudentGrade(50,100);

module.exports = calculateStudentGrade;