
$(document).ready(function(){
    $('a.definition-tooltip').tooltip({animation:false});

    const charFilterBlock = $('#anagram-position-filter');
    var characters = [];

    function renderCharacterFilter()
    {
        removeLettersFromFilter();
        characters.forEach(function(char, index){
            var html = '<div class="letter col-md-1">' +
                '           <em class="col-md-12 text-center bold">' + char.toUpperCase() + '</em>' +
                '           <input type="text" class="form-control" name="position[' + index + ']" value="">' +
                '       </div>';
            charFilterBlock.append(html);
        });
        if(charFilterBlock.hasClass('hidden')) {
            charFilterBlock.removeClass('hidden');
        }
    }

    function hideCharacterFilter()
    {
        if(!charFilterBlock.hasClass('hidden')) {
            charFilterBlock.addClass('hidden');
            removeLettersFromFilter();
        }
    }

    function removeLettersFromFilter()
    {
        var letterBLocks = charFilterBlock.find('.letter');
        if(letterBLocks) {
            letterBLocks.each(function () {
                $(this).remove();
            });
        }
    }

    function validateInput() {
        var regExp = new RegExp(/[a-zA-Z]+/);
        var value = $('#anagram-form .letters-input').val();
        var result = regExp.exec(value);
        if(result) {
            $('#anagram-form .letters-input').val(result.join(''));
        }
    }

    $('#anagram-form .letters-input').on('keyup change', function(e){
        validateInput();
        var value = $(this).val();
        if(value && value.length > 0) {
            var splitted = [];
            for(var i = 0; i < value.length; i++) {
                splitted.push(value[i]);
            }
            var equal = exactCompareArrays(characters, splitted);
            if(!equal) {
                characters = splitted;
                renderCharacterFilter();
            }
        } else {
            hideCharacterFilter();
        }
    });

    $(document).on('keyup change', '.letter input[type="text"]', function(e){
        var regExp = new RegExp(/[0-9]+/);
        var value = $(this).val();
        var result = regExp.exec(value);
        if(result) {
            $(this).val(result.join(''));
        }
    });
});

/**
 * Compares two arrays exactly by length, elements and position of each element
 * @param arr1
 * @param arr2
 * @returns {boolean} - `true` if arrays equals and `false` if they are'nt
 */
function exactCompareArrays(arr1, arr2) {
    if(!(arr1 instanceof Array) || !(arr2 instanceof Array)) {
        throw new Error("Variable passed into exactCompareArrays() method are not array");
    }
    var equal = true;
    if(arr1.length !== arr2.length) {
        equal = false;
    }
    if(equal) {
        for(var i = 0; i < arr1; i++) {
            if(arr1[i] && arr2[i] && arr1[i] !== arr2[i]) {
                equal = false;
            }
        }
    }
    return equal;
}