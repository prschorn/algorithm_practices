using Xunit;

namespace Calculations.Test
{
    public class PasswordTests
    {
        [Fact]
        public void Validate_GivenLongerThan8Chars_ReturnsTrue()
        {
            //Given
            var testTarget = new DefaultPasswordValidator();
            var password = MakeString(7) + "A";
            //When
            var validationResult = testTarget.Validate(password);


            //Then
            Assert.True(validationResult);
        }

        [Fact]
        public void Validate_GivenShorterThan8Characters_ReturnsFalse()
        {
            //Given
            var testTarget = new DefaultPasswordValidator();
            var password = MakeString(6) + "A";
            //When
            var validationResult = testTarget.Validate(password);

            //Then
            Assert.False(validationResult);
        }

        [Fact]
        public void Validate_GivenNoUpperCase_ReturnsFalse()
        {
            //Given
            var testTarget = new DefaultPasswordValidator();
            var password = MakeString(8); // all lower case
            //When
            var validationResult = testTarget.Validate(password);

            //Then
            Assert.False(validationResult);
        }

        [Fact]
        public void Validate_GivenOneUpperCase_ReturnsTrue()
        {
            //Given
            var testTarget = new DefaultPasswordValidator();
            var password = MakeString(8) + "A"; // at least one upper case
            //When
            var validationResult = testTarget.Validate(password);

            //Then
            Assert.True(validationResult);
        }


        private string MakeString(int length)
        {
            string result = "";
            for (int i = 0; i < length; i++)
            {
                result += "a";
            }
            return result;
        }
    }
}