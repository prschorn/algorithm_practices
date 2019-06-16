using Xunit;

namespace Calculations.Test
{
    public class CalculatorTest
    {
        [Fact]
        public void Add_GivenTwoIntValues_ReturnsInt()
        {
            //Arrange
            var calc = new Calculator();
            //Act
            var result = calc.Add(1,2);
            //Assert
            Assert.Equal(3,result);
        }

        [Fact]
        public void AddDouble_GivenTwoDoubleValues_ReturnsDouble()
        {
            //Arrange
            var calc = new Calculator();
            //Act
            var result = calc.AddDouble(1.2, 3.5);
            //Arrange
            Assert.Equal(4.7, result, 1);
        }
    }
}