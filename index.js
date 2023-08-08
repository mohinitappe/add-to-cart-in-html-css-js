var radioOneChecked = document.querySelector('#r1') 
        var radioTwoChecked = document.querySelector('#r2') 
        var radioThreeChecked = document.querySelector('#r3') 
        
        var oneDiv = document.querySelector('#one-pair') 
        var twoDiv = document.querySelector('#two-pair') 
        var threeDiv = document.querySelector('#three-pair') 

        radioOneChecked.addEventListener('click', function() {
            console.log('one')
            oneDiv.style.display = 'block'
            twoDiv.style.display = 'none'
            threeDiv.style.display = 'none'
            document.querySelector('.oneDiv').style.backgroundColor = '#F4FBF9'
            document.querySelector('.twoDiv').style.backgroundColor = 'transparent'
            document.querySelector('.threeDiv').style.backgroundColor = 'transparent'
        })
        radioTwoChecked.addEventListener('click', function() {
            console.log('two')
            oneDiv.style.display = 'none'
            twoDiv.style.display = 'block'
            threeDiv.style.display = 'none'
            document.querySelector('.twoDiv').style.backgroundColor = '#F4FBF9'
            document.querySelector('.oneDiv').style.backgroundColor = 'transparent'
            document.querySelector('.threeDiv').style.backgroundColor = 'transparent'
        })
        radioThreeChecked.addEventListener('click', function() {
            console.log('three')
            oneDiv.style.display = 'none'
            twoDiv.style.display = 'none'
            threeDiv.style.display = 'block'
            document.querySelector('.threeDiv').style.backgroundColor = '#F4FBF9'
            document.querySelector('.oneDiv').style.backgroundColor = 'transparent'
            document.querySelector('.twoDiv').style.backgroundColor = 'transparent'
        })